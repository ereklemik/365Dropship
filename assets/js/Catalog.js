import { products } from "./API.js";

const fillUpCatalog = async (sort = null) => {
  const productList = await products(sort);
  let productHTML = "";
  const catalog = document.getElementsByClassName("catalog")[0];
  console.log(catalog);
  for (const product of productList) {
    productHTML += ` 
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
  }
  console.log(productList);
  catalog.innerHTML = productHTML;
};

fillUpCatalog();

//Sorting
const sort = document.getElementById("sort");
sort.addEventListener("change", () => {
  fillUpCatalog(sort.value);
});
