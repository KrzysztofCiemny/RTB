import "./animation.js";

const images = document.querySelectorAll(".image");
const countries = document.querySelectorAll(".country-name-text");
const cities = document.querySelectorAll(".city-name-text");
const prices = document.querySelectorAll(".price-sum");

const getOffers = async () => {
  try {
    const response = await fetch(
      "https://rekrutacja.webdeveloper.rtbhouse.net/files/banner_vip.json"
    );
    const data = await response.json();
    data.offers.forEach((offer, index) => {
      images[index].setAttribute("src", offer.imgURL);
      countries[index].innerText = `${offer.country}`;
      cities[index].innerText = `${offer.city}`;
      prices[index].innerText = `${offer.price} USD`;
    });
    images.forEach((image, index) => {
      image.setAttribute("src", data.offers[index].imgURL);
    });
  } catch (error) {
    console.log(error);
  }
};
getOffers();
