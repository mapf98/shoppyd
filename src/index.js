import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import initStore from './store';
import { PersistGate } from 'redux-persist/integration/react';

const store = initStore().store;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={initStore().persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
