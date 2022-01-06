import actionTypes from './actionTypes';

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(actionTypes.fetchProducts());
    return fetch(`https://front-test-api.herokuapp.com/api/product`)
      .then((data) => data.json())
      .then((data) => {
        dispatch(actionTypes.fetchedProducts({ data, total: data.length }));
      })
      .catch((err) => dispatch(actionTypes.fetchProductsError({ msg: err.message })));
  };
};
