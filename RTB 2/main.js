import "./sliderAnimation.js";

const getOffers = async () => {
  const response = await fetch(
    "https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json"
  );
  const data = await response.json();
  const randomOffers = randomizeOffers(data);
  const productsImages = document.querySelectorAll(".product_image");
  const productsPrizes = document.querySelectorAll(".product_prize");
  randomOffers.map((offer, index) => {
    if (index == 0) {
      const lastImage = 3;
      productsImages[lastImage].setAttribute("src", offer.imgURL);
      productsImages[lastImage].setAttribute("alt", offer.name);
      productsPrizes[lastImage].innerText = `${parseFloat(offer.price).toFixed(
        2
      )} zł`;
    }
    productsImages[index].setAttribute("src", offer.imgURL);
    productsImages[index].setAttribute("alt", offer.name);
    productsPrizes[index].innerText = `${parseFloat(offer.price).toFixed(
      2
    )} zł`;
  });
};
getOffers();

const randomizeOffers = (data) => {
  const randomIndexes = [];
  const numberOfNeededOffers = 3;
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
