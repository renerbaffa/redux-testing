import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers/index';


import './App.css';

import LandingPage from './LandingPage'

export const configureStore = (initialState = {}) => {
  const middleware = [
    thunk,
    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'FAIL'],
    }),
  ];

  const appliedMiddleware = composeWithDevTools(applyMiddleware(...middleware));

  return createStore(
    reducers,
    initialState,
    appliedMiddleware,
  );
}

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LandingPage />
      </Provider>
    );
  }
}

export default App;
