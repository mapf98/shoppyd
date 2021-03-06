import { combineReducers } from 'redux';
import products from './products/reducers';
import navigation from './navigation/reducers';
import productDetails from './productDetails/reducers';
import cart from './cart/reducers';

export default combineReducers({
  products: products,
  productDetails: productDetails,
  navigation: navigation,
  cart: cart
});
