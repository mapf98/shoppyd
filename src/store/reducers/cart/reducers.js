import actionTypes from './actionTypes';

const initialState = {
  isFetched: false,
  isError: false,
  cartCount: 0,
  msg: ''
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.names.ADD_PRODUCT_TO_CART:
      return Object.assign({}, state, {
        isFetched: false,
        isError: false,
        cartCount: 0,
        msg: ''
      });
    case actionTypes.names.ADDED_PRODUCT_TO_CART:
      return Object.assign({}, state, {
        isFetched: true,
        isError: false,
        cartCount: action.cartCount,
        msg: ''
      });
    case actionTypes.names.ADD_PRODUCT_TO_CART_ERROR:
      return Object.assign({}, state, {
        isFetched: true,
        isError: true,
        cartCount: 0,
        msg: action.msg
      });
    default:
      return state;
  }
};

export default cart;
