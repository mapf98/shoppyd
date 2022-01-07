import actionTypes from './actionTypes';

export const addProductToCart = (product_id, color_id, storage_id) => {
  return (dispatch) => {
    dispatch(actionTypes.addProductToCart());
    return fetch(`${process.env.REACT_APP_BASE_API_URL}/cart`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({ id: product_id, colorCode: color_id, storageCode: storage_id })
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.count === undefined) {
          throw new Error(data.message);
        } else {
          console.log(data);
          dispatch(actionTypes.addedProductToCart({ cartCount: data.count }));
        }
      })
      .catch((error) => dispatch(actionTypes.addProductToCartError({ msg: error.message })));
  };
};
