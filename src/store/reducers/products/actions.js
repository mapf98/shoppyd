import { checkCacheValid } from 'redux-cache';
import actionTypes from './actionTypes';

export const fetchProducts = () => {
  return (dispatch, getState) => {
    const isCacheValid = checkCacheValid(getState, 'products');
    if (isCacheValid) {
      console.log('USE OF PRODUCT LISTING IN CACHE AT: ', new Date().toISOString());
      return null;
    } else {
      console.log('NEW PRODUCT LISTING REQUEST MADE AT: ', new Date().toISOString());
      dispatch(actionTypes.fetchProducts());
      return fetch(`https://front-test-api.herokuapp.com/api/product`)
        .then((data) => data.json())
        .then((data) => {
          dispatch(actionTypes.fetchedProducts({ data, total: data.length }));
        })
        .catch((error) => dispatch(actionTypes.fetchProductsError({ msg: error.message })));
    }
  };
};

export const fetchCustomSearch = (search) => {
  return (dispatch, getState) => {
    const state = getState().products;
    try {
      dispatch(actionTypes.fetchCustomSearch({ search, data: state.products }));
      let customSearchItems = state.products;
      customSearchItems = customSearchItems.filter(function (product) {
        const productName = (product.brand + product.model).toLowerCase().replace(/ /g, '');
        return productName.indexOf(search.toLowerCase().replace(/ /g, '')) > -1;
      });
      dispatch(
        actionTypes.fetchedCustomSearch({
          search,
          data: state.products,
          results: customSearchItems,
          totalResults: customSearchItems.length
        })
      );
    } catch (error) {
      dispatch(actionTypes.fetchCustomSearchError({ msg: error.message, data: state.products }));
    }
  };
};

export const clearCustomSearch = () => {
  return (dispatch, getState) => {
    const state = getState().products;
    try {
      dispatch(actionTypes.clearCustomSearch({ data: state.products }));
    } catch (error) {
      dispatch(actionTypes.clearCustomSearchError({ msg: error.message, data: state.products }));
    }
  };
};
