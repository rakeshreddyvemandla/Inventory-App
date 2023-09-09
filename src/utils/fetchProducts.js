const fetchProducts = async (url) => {
  try {
    const res = await fetch(url);
    const products = res.json();
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchProducts;
