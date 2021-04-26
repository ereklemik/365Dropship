import { products } from "./API.js";

export const fillUpCatalog = async () => {
  const productList = await products();
  console.log(productList);
};

fillUpCatalog();
