"use strict";

const apiResult = [
  {
    title: "title1",
    image: "./img/indian-condiments-with-copy-space-view.jpg",
    price: "$100",
  },
  {
    title: "title1",
    image: "./img/indian-condiments-with-copy-space-view.jpg",
    price: "$100",
  },
  {
    title: "title1",
    image: "./img/indian-condiments-with-copy-space-view.jpg",
    price: "$100",
  },

  {
    title: "title1",
    image: "./img/indian-condiments-with-copy-space-view.jpg",
    price: "$100",
  },
  {
    title: "title1",
    image: "./img/indian-condiments-with-copy-space-view.jpg",
    price: "$100",
  },
  {
    title: "title1",
    image: "./img/indian-condiments-with-copy-space-view.jpg",
    price: "$100",
  },
];

const container = document.getElementById("display-products");

apiResult.forEach((result, idx) => {
  // Create card element
  const card = document.createElement("div");
  card.classList = "card-body";

  // Construct card content
  const content = `
      <div class="col-xl-4 col-md-6 col-sm-12 custom-gap">
          <div class="card" style="width: 18rem; margin: 0  auto">
              <img src=${result.image} class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${result.title}</h5>

              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item"><i class="fa-solid fa-star"></i><i
                          class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></li>
                  <li class="list-group-item">${result.price}</li>

              </ul>
              <div class="card-body d-xl-flex justify-content-xl-around">
                  <p class="card-link"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</a>
                  <p class="card-link"><i class="fa-solid fa-heart"></i>Favorite</a>
              </div>
          </div>
      </div>
    `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});
