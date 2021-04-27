import { ServerAddress } from "./Config.js";

const call = async (url) => {
  const request = await fetch(ServerAddress + url);
  const result = await request.json();
  return result;
};


export const products = async (sort = null) => {
  return await call(`products${sort ? `?sort=${sort}` : ""}`);
};

export const categories = async () => await call("/products/categories");
//
//
// const call = async (url) => {
//   const request = await fetch(url);
//   const result = await request.json();
//   return result;
// };

// const getAllProducts = async () => {
//   let result = await call("https://fakestoreapi.com/products");
//   return result;
// };

// const getAllCategories = async () => {
//   let result = await call("https://fakeshtoreapi.com/products/categories");

//   return result;
// };

// getAllProducts().then((result) => {
//   console.log(result);
// });

// getAllCategories().then((categories) => {
//   console.log(categories);
// });
