import { getProducts } from "./API.js";

export const generateProduct = (product) => `
            <div class="catalog__product">
            <div class="catalog__head">
            </div>
            <div class="catalog__img">
                <img src ="${product.image}">
            </div>
            <div class="catalog__title">
            ${product.title}
            </div>
            <div class="catalog__prices">
                ${product.price}$
            </div>
            </div>
`;

const generateProductList = (allProducts) => {
  let productsContent = "";
  for (const product of allProducts) {
    productsContent += generateProduct(product);
  }
  return productsContent;
};

const catalog = document.getElementsByClassName("catalog")[0];

const fillUpCatalog = async (sort) => {
  const products = await getProducts(sort);
  if (sort === "asc") {
    const ascSorting = products.sort((a, b) => b.price - a.price);
    catalog.innerHTML = generateProductList(ascSorting);
    return;
  } else if (sort === "desc") {
    const descSorting = products.sort((a, b) => a.price - b.price);
    catalog.innerHTML = generateProductList(descSorting);
    return;
  } else {
    catalog.innerHTML = generateProductList(products);
  }
};

fillUpCatalog();

const sort = document.getElementById("sort");
sort.addEventListener("change", () => {
  fillUpCatalog(sort.value);
});


const searchQuery = document.getElementById("search");
const searchButton = document.getElementById("search__button");

searchButton.addEventListener("click", async () => {
  const products = await getProducts();
  const caseInsensitive = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  catalog.innerHTML = generateProductList(caseInsensitive);
});
