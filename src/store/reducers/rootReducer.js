import { combineReducers } from 'redux';
import products from './products/reducers';
import navigation from './navigation/reducers';

export default combineReducers({ products: products, navigation: navigation });
