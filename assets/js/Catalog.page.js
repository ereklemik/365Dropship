import { getProducts } from "./API.js";

const catalog = document.getElementsByClassName("catalog")[0];

const productGenerator = (product) => `
          <div class="catalog__product">
          <div class="catalog__photo">
          <img src="${product.image}"/>
          </div>
          <div class="catalog__title">
          ${product.title}
          </div>
          <div class="catalog__price"">
          ${product.price}$
          </div>
          </div>`;
getProducts().then((allProducts) => {
  let productHTML = "";
  for (const product of allProducts) {
    productHTML += productGenerator(product);
  }
  catalog.innerHTML = productHTML;
});
