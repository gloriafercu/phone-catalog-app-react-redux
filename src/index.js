import React from 'react';
import ReactDOM from 'react-dom';
//import { HashRouter } from 'react-router-dom';
import App from './components/app/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/combinereducers.js';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

