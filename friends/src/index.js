import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { friendReducer } from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
    friendReducer, applyMiddleware(thunk)
)

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>,
  rootElement
)

