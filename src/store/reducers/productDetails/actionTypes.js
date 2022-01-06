const names = {
  SET_PRODUCT_DETAIL_NAVIGATION: 'SET_PRODUCT_DETAIL_NAVIGATION',
  CLEAR_PRODUCT_DETAIL_NAVIGATION: 'CLEAR_PRODUCT_DETAIL_NAVIGATION'
};

const setProductDetailNavigation = (payload) => ({
  type: names.SET_PRODUCT_DETAIL_NAVIGATION,
  ...payload
});

const clearProductDetailNavigation = (payload) => ({
  type: names.CLEAR_PRODUCT_DETAIL_NAVIGATION,
  ...payload
});

export default {
  names,
  setProductDetailNavigation,
  clearProductDetailNavigation
};
