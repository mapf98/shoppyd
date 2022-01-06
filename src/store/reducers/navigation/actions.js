import actionTypes from './actionTypes';

export const setNavigation = (id, name) => {
  return (dispatch) => {
    dispatch(actionTypes.setNavigation({ product_id: id, product_name: name }));
  };
};

export const clearNavigation = () => {
  return (dispatch) => {
    dispatch(actionTypes.clearNavigation());
  };
};
