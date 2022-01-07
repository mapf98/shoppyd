const names = {
  ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
  ADDED_PRODUCT_TO_CART: 'ADDED_PRODUCT_TO_CART',
  ADD_PRODUCT_TO_CART_ERROR: 'ADD_PRODUCT_TO_CART_ERROR'
};

const addProductToCart = (payload) => ({
  type: names.ADD_PRODUCT_TO_CART,
  ...payload
});

const addedProductToCart = (payload) => ({
  type: names.ADDED_PRODUCT_TO_CART,
  ...payload
});

const addProductToCartError = (payload) => ({
  type: names.ADD_PRODUCT_TO_CART_ERROR,
  ...payload
});

export default {
  names,
  addProductToCart,
  addedProductToCart,
  addProductToCartError
};
