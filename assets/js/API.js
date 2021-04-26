import { ServerAddress } from './Config.js';

const call = async (url) => {
  const request = await fetch(ServerAddress + url);
  const result = await request.json();
  return result;
};

export const products = async (sort = null) => {
  return await call(`products${sort ? `?sort=${sort}` : ''}`);
};


export const categories = async () => await call('/products/categories');
