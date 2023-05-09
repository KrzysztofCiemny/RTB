import "./animation.js";

const getOffers = async () => {
  const response = await fetch(
    "https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json"
  );
  const data = await response.json();
  const randomOffers = randomizeOffers(data);
  const productsImages = document.querySelectorAll(".product_image");
  const productsPrizes = document.querySelectorAll(".product_prize");
  randomOffers.map((offer, index) => {
    productsImages[index].setAttribute("src", offer.imgURL);
    productsPrizes[index].innerText = `${parseFloat(offer.price).toFixed(
      2
    )} zł`;
  });
};
getOffers();

const randomizeOffers = (data) => {
  const randomIndexes = [];
  const numberOfNeededOffers = 4;
  while (randomIndexes.length < numberOfNeededOffers) {
    const randomIndex = Math.floor(Math.random() * data.offers.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  const randomOffers = [];
  for (let i = 0; i < randomIndexes.length; i++) {
    randomOffers.push(data.offers[randomIndexes[i]]);
  }
  return randomOffers;
};
