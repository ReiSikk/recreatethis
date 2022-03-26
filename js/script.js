window.addEventListener("DOMContentLoaded", init);

function init() {
  loadData();
}

async function loadData() {
  const response = await fetch(
    "https://mediarei.com/wp-bikes/wp-json/wp/v2/bike_model?_embed"
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

    /*    let colors = bike._embedded["wp:term"][1];
    if (colors.length) {
      alert("hey");
      cloneEl.querySelector(".colours span").textContent = "";
      const ulEl = document.createElement("ul");
      colors.forEach((color) => {
        const liEl = document.createElement("li");
        liEl.style.backgroundColor = color.name;
        ulEl.appendChild(liEl);
      });
      clone.querySelector(".colours span").appendChild(ulEl);
    }
 */

    /*  showColors(); */
    const parent = document.querySelector("main");
    parent.appendChild(clone);
  });
}

/* function showColors() {
  alert("showColors");
  if ((document.querySelector(".colour1").textContent = "#F0EBD8")) {
    document.querySelector(".colour1").classList.remove("hidden");
  }
} */
