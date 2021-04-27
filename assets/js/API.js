import { SERVER } from './Config.js';
const call = async (url) => {
  const request = await fetch(SERVER + url);
  const result = await request.json();
  return result;
};

export const getProducts = async () => {
  let result = await call("products");
  return result;
};

export const getCategories = async () => {
  let result = await call("products/categories");
  return result;
};


