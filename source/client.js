import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './app/reducer.js';

const preloaded_state = window.__PRELOADED__STATE__;

var store = createStore(
  reducer,
  preloaded_state,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk,
      logger,
    ),
  )
);


function client (){
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

render(client(), document.getElementById('render_target'))
