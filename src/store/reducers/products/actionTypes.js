const names = {
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  FETCHED_PRODUCTS: 'FETCHED_PRODUCTS',
  FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR',
  FETCH_CUSTOM_SEARCH: 'FETCH_CUSTOM_SEARCH',
  FETCHED_CUSTOM_SEARCH: 'FETCHED_CUSTOM_SEARCH',
  FETCH_CUSTOM_SEARCH_ERROR: 'FETCH_CUSTOM_SEARCH_ERROR',
  CLEAR_CUSTOM_SEARCH: 'CLEAR_CUSTOM_SEARCH',
  CLEAR_CUSTOM_SEARCH_ERROR: 'CLEAR_CUSTOM_SEARCH_ERROR'
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

const fetchCustomSearch = (payload) => ({
  type: names.FETCH_CUSTOM_SEARCH,
  ...payload
});

const fetchedCustomSearch = (payload) => ({
  type: names.FETCHED_CUSTOM_SEARCH,
  ...payload
});

const fetchCustomSearchError = (payload) => ({
  type: names.FETCH_CUSTOM_SEARCH_ERROR,
  ...payload
});

const clearCustomSearch = (payload) => ({
  type: names.CLEAR_CUSTOM_SEARCH,
  ...payload
});

const clearCustomSearchError = (payload) => ({
  type: names.CLEAR_CUSTOM_SEARCH_ERROR,
  ...payload
});

export default {
  names,
  fetchProducts,
  fetchedProducts,
  fetchProductsError,
  fetchCustomSearch,
  fetchedCustomSearch,
  fetchCustomSearchError,
  clearCustomSearch,
  clearCustomSearchError
};
