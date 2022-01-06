import actionTypes from './actionTypes';

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(actionTypes.fetchProducts());
    return fetch(`https://front-test-api.herokuapp.com/api/product`)
      .then((data) => data.json())
      .then((data) => {
        dispatch(actionTypes.fetchedProducts({ data, total: data.length }));
      })
      .catch((error) => dispatch(actionTypes.fetchProductsError({ msg: error.message })));
  };
};

export const fetchCustomSearch = (search) => {
  return (dispatch, getState) => {
    const state = getState().products;
    try {
      dispatch(actionTypes.fetchCustomSearch({ search, data: state.products }));
      let customSearchItems = state.products;
      customSearchItems = customSearchItems.filter(function (product) {
        const productName = (product.brand + product.model).toLowerCase();
        return productName.indexOf(search.toLowerCase()) > -1;
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
