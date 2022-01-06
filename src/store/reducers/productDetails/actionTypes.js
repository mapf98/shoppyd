const names = {
  FETCH_PRODUCT_DETAIL: 'FETCH_PRODUCT_DETAIL',
  FETCHED_PRODUCT_DETAIL: 'FETCHED_PRODUCT_DETAIL',
  FETCH_PRODUCT_DETAIL_ERROR: 'FETCH_PRODUCT_DETAIL_ERROR'
};

const fetchProductDetail = (payload) => ({
  type: names.FETCH_PRODUCT_DETAIL,
  ...payload
});

const fetchedProductDetail = (payload) => ({
  type: names.FETCHED_PRODUCT_DETAIL,
  ...payload
});

const fetchProductDetailError = (payload) => ({
  type: names.FETCH_PRODUCT_DETAIL_ERROR,
  ...payload
});

export default {
  names,
  fetchProductDetail,
  fetchedProductDetail,
  fetchProductDetailError
};
