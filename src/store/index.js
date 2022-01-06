import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { cacheEnhancer } from 'redux-cache';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  let store = createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(thunk), cacheEnhancer())
  );
  let persistor = persistStore(store);
  return { store, persistor };
}
