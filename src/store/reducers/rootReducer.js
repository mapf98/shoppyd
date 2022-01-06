import { combineReducers } from 'redux';
import products from './products/reducers';
import productDetails from './productDetails/reducers';

export default combineReducers({ products: products, productDetails: productDetails });
