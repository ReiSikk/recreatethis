window.addEventListener("DOMContentLoaded", init);

function init() {
  loadData();
}

async function loadData() {
  const response = await fetch(
    "http://mediarei.com/wp-bikes/wp-json/wp/v2/bike_model?_embed"
  );
  console.log("response", response);
  const bikeData = await response.json();

  displayBike(bikeData);
}
/* 
async function displayBike(bike) {
  let singleBike = bike[0];
  console.log(bike);
  document.querySelector(".model").textContent = singleBike.bike_models;
  document.querySelector(".price").textContent =
    "Price - " + `$${singleBike.bike_price}`;
  document.querySelector(".colours").textContent =
    "Colours - " + `${singleBike.bike_colours}`;
  document.querySelector(".stocknr").textContent =
    "Stock - " + `${singleBike.bike_stock}`;

  document.querySelector("img").src =
    singleBike._embedded["wp:featuredmedia"][0].source_url;
} */

async function displayBike(bike) {
  let singleBike = bike[0];
  console.log(bike);
  bike.forEach((bike) => {
    console.log(bike.title.rendered);
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    clone.querySelector(".model").textContent = `${bike.bike_models}`;
    clone.querySelector(".price").textContent =
      "Price - " + `$${bike.bike_price}`;
    clone.querySelector(".colours").textContent =
      "Colours - " + `${bike.bike_colours}`;
    clone.querySelector(".stocknr").textContent =
      "Stock - " + `${bike.bike_stock}`;

    clone.querySelector(
      "img"
    ).src = `${bike._embedded["wp:featuredmedia"][0].source_url}`;

    const parent = document.querySelector("main");
    parent.appendChild(clone);
  });
}
