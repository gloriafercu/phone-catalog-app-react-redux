import React from 'react';
import ReactDOM from 'react-dom';
//import { HashRouter } from 'react-router-dom';
import App from './components/app/App';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/myreducer.js';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(reducers, applyMiddleware(thunk));

console.log('store', store.getState())

store.subscribe(() => console.log('store is now: ', store.getState().phonelist))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

