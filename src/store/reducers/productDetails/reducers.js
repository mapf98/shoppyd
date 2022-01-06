import { DEFAULT_KEY, generateCacheTTL } from 'redux-cache';
import actionTypes from './actionTypes';

const initialState = {
  [DEFAULT_KEY]: null,
  isFetched: false,
  isError: false,
  currentProductDetails: {},
  allProductsWithFetchedDetails: [],
  msgError: ''
};

const productDetails = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.names.FETCH_PRODUCT_DETAIL:
      return Object.assign({}, state, {
        isFetched: false,
        isError: false,
        currentProductDetails: {},
        allProductsWithFetchedDetails: action.allProductsWithFetchedDetails,
        msgError: ''
      });
    case actionTypes.names.FETCHED_PRODUCT_DETAIL:
      return Object.assign({}, state, {
        [DEFAULT_KEY]: generateCacheTTL(parseInt(process.env.REACT_APP_STANDAR_CACHE_TIME)),
        isFetched: true,
        isError: false,
        currentProductDetails: action.current,
        allProductsWithFetchedDetails: action.allProductsWithFetchedDetails,
        msgError: ''
      });
    case actionTypes.names.FETCH_PRODUCT_DETAIL_ERROR:
      return Object.assign({}, state, {
        isFetched: true,
        isError: true,
        currentProductDetails: {},
        allProductsWithFetchedDetails: action.allProductsWithFetchedDetails,
        msgError: action.msg
      });
    default:
      return state;
  }
};

export default productDetails;
