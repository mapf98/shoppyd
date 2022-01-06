import { DEFAULT_KEY, generateCacheTTL } from 'redux-cache';
import actionTypes from './actionTypes';

const initialState = {
  [DEFAULT_KEY]: null,
  isFetched: false,
  isError: false,
  isSearch: false,
  products: [],
  searchResults: [],
  totalProducts: 0,
  msgError: '',
  search: ''
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.names.FETCH_PRODUCTS:
      return Object.assign({}, state, {
        isFetched: false,
        isError: false,
        isSearch: false,
        products: [],
        searchResults: [],
        totalProducts: 0,
        msgError: '',
        search: ''
      });
    case actionTypes.names.FETCHED_PRODUCTS:
      return Object.assign({}, state, {
        [DEFAULT_KEY]: generateCacheTTL(parseInt(process.env.REACT_APP_STANDAR_CACHE_TIME)),
        isFetched: true,
        isError: false,
        isSearch: false,
        products: action.data,
        searchResults: [],
        totalProducts: action.total,
        msgError: '',
        search: ''
      });
    case actionTypes.names.FETCH_PRODUCTS_ERROR:
      return Object.assign({}, state, {
        isFetched: true,
        isError: true,
        isSearch: false,
        products: [],
        searchResults: [],
        totalProducts: 0,
        msgError: action.msg,
        search: ''
      });
    case actionTypes.names.FETCH_CUSTOM_SEARCH:
      return Object.assign({}, state, {
        isFetched: false,
        isError: false,
        isSearch: true,
        products: action.data,
        searchResults: [],
        totalProducts: 0,
        msgError: '',
        search: action.search
      });
    case actionTypes.names.FETCHED_CUSTOM_SEARCH:
      return Object.assign({}, state, {
        isFetched: true,
        isError: false,
        isSearch: true,
        products: action.data,
        searchResults: action.results,
        totalProducts: action.totalResults,
        msgError: '',
        search: action.search
      });
    case actionTypes.names.FETCHED_CUSTOM_SEARCH_ERROR:
      return Object.assign({}, state, {
        isFetched: true,
        isError: true,
        isSearch: true,
        products: action.data,
        searchResults: [],
        totalProducts: 0,
        msgError: action.msg,
        search: ''
      });
    case actionTypes.names.CLEAR_CUSTOM_SEARCH:
      return Object.assign({}, state, {
        isFetched: true,
        isError: false,
        isSearch: false,
        products: action.data,
        searchResults: [],
        totalProducts: action.data.length,
        msgError: '',
        search: ''
      });
    case actionTypes.names.CLEAR_CUSTOM_SEARCH_ERROR:
      return Object.assign({}, state, {
        isFetched: true,
        isError: true,
        isSearch: false,
        products: action.data,
        searchResults: [],
        totalProducts: action.data.length,
        msgError: action.msg,
        search: ''
      });
    default:
      return state;
  }
};

export default products;
