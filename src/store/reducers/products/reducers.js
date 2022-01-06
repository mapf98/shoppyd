import actionTypes from './actionTypes';

const initialState = {
  isFetched: false,
  isError: false,
  products: [],
  totalProducts: 0,
  msgError: ''
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.names.FETCH_PRODUCTS:
      return Object.assign({}, state, {
        isFetched: false,
        isError: false,
        products: [],
        totalProducts: 0,
        msgError: ''
      });
    case actionTypes.names.FETCHED_PRODUCTS:
      return Object.assign({}, state, {
        isFetched: true,
        isError: false,
        products: action.data,
        totalProducts: action.total,
        msgError: ''
      });
    case actionTypes.names.FETCH_PRODUCTS_ERROR:
      return Object.assign({}, state, {
        isFetched: true,
        isError: true,
        products: [],
        totalProducts: 0,
        msgError: action.msg
      });
    default:
      return state;
  }
};

export default products;
