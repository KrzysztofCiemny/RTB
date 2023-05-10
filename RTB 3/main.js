const daysOutput = document.querySelector(".days");
const hoursOutput = document.querySelector(".hours");
const minutesOutput = document.querySelector(".minutes");
const secondsOutput = document.querySelector(".seconds");

const endDate = new Date("2023-05-16T23:59:59Z");

const countDown = () => {
  const remainingTime = endDate.getTime() - Date.now();
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (remainingTime < 0) {
    clearInterval(contDownInterval);
    document.querySelector(".counter").textContent = "Promocja zakończona";
    return;
  }

  const daysTillEnd = Math.floor(remainingTime / day);
  const hoursTillEnd = Math.floor((remainingTime % day) / hour);
  const minutesTillEnd = Math.floor((remainingTime % hour) / minute);
  const secondsTillEnd = Math.floor((remainingTime % minute) / second);

  daysOutput.innerText =
    daysTillEnd < 10 ? `0${daysTillEnd}-` : `${daysTillEnd}-`;
  hoursOutput.innerText =
    hoursTillEnd < 10 ? `0${hoursTillEnd}-` : `${hoursTillEnd}-`;
  minutesOutput.innerText =
    minutesTillEnd < 10 ? `0${minutesTillEnd}-` : `${minutesTillEnd}-`;
  secondsOutput.innerText =
    secondsTillEnd < 10 ? `0${secondsTillEnd}` : secondsTillEnd;

  if (daysTillEnd < 1) {
    daysOutput.style.display = "none";
  }
  if (daysTillEnd < 1 && hoursTillEnd <= 1) {
    hoursOutput.style.display = "none";
  }
};

const contDownInterval = setInterval(countDown, 1000);
