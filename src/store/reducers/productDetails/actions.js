import { checkCacheValid } from 'redux-cache';
import actionTypes from './actionTypes';

export const fetchProductDetail = (product_id) => {
  return (dispatch, getState) => {
    const state = getState().productDetails;
    let isCached = false;
    let cachedProductDetails = {};

    state.allProductsWithFetchedDetails.forEach((product) => {
      if (product.id == product_id) {
        isCached = true;
        cachedProductDetails = product;
      }
    });

    const isCacheValid = checkCacheValid(getState, 'productDetails');

    if (isCacheValid && isCached) {
      console.log('USE OF PRODUCT DETAILS STORED IN CACHE AT: ', new Date().toISOString());
      dispatch(
        actionTypes.fetchedProductDetail({
          current: cachedProductDetails,
          allProductsWithFetchedDetails: state.allProductsWithFetchedDetails
        })
      );
      return null;
    } else {
      console.log('NEW REQUEST FOR PRODUCT DETAILS AT: ', new Date().toISOString());
      dispatch(
        actionTypes.fetchProductDetail({
          allProductsWithFetchedDetails: state.allProductsWithFetchedDetails
        })
      );

      return fetch(`${process.env.REACT_APP_BASE_API_URL}/product/${product_id}`)
        .then((data) => data.json())
        .then((data) => {
          if (data.id == undefined) {
            throw new Error(data.message);
          } else {
            const productsWithFetchedDetails = state.allProductsWithFetchedDetails;
            productsWithFetchedDetails.push(data);
            dispatch(
              actionTypes.fetchedProductDetail({
                current: data,
                allProductsWithFetchedDetails: productsWithFetchedDetails
              })
            );
          }
        })
        .catch((error) =>
          dispatch(
            actionTypes.fetchProductDetailError({
              msg: error.message,
              allProductsWithFetchedDetails: state.allProductsWithFetchedDetails
            })
          )
        );
    }
  };
};
