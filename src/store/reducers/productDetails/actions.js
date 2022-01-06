import actionTypes from './actionTypes';

export const setProductDetailNavigation = (id, name) => {
  return (dispatch) => {
    dispatch(actionTypes.setProductDetailNavigation({ product_id: id, product_name: name }));
  };
};

export const clearProductDetailNavigation = () => {
  return (dispatch) => {
    dispatch(actionTypes.clearProductDetailNavigation());
  };
};
