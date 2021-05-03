import { SERVER } from "./Config.js";


const call = async (url) => {
  const request = await fetch(SERVER + url)
  return await request.json();
}

export const getProducts = async (sort = null) =>
  await call(`products${sort ? `?sort=${sort}`: ''}`);


export const categories = async () =>
  await call("products/categories")
