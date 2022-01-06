const names = {
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  FETCHED_PRODUCTS: 'FETCHED_PRODUCTS',
  FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR'
};

const fetchProducts = (payload) => ({
  type: names.FETCH_PRODUCTS,
  ...payload
});

const fetchedProducts = (payload) => ({
  type: names.FETCHED_PRODUCTS,
  ...payload
});

const fetchProductsError = (payload) => ({
  type: names.FETCH_PRODUCTS_ERROR,
  ...payload
});

export default { names, fetchProducts, fetchedProducts, fetchProductsError };
