import actionTypes from './actionTypes';

const initialState = {
  productId: -1,
  productName: ''
};

const productDetails = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.names.SET_PRODUCT_DETAIL_NAVIGATION:
      return Object.assign({}, state, {
        productId: action.product_id,
        productName: action.product_name
      });
    case actionTypes.names.CLEAR_PRODUCT_DETAIL_NAVIGATION:
      return Object.assign({}, state, {
        productId: -1,
        productName: ''
      });
    default:
      return state;
  }
};

export default productDetails;
