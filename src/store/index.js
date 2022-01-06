import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { cacheEnhancer } from 'redux-cache';

export default function configureStore() {
  return createStore(rootReducer, undefined, compose(applyMiddleware(thunk), cacheEnhancer()));
}
