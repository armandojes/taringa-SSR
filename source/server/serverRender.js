import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
import Markup from './markup.jsx';
import App from '../app/app.jsx';
import { StaticRouter } from 'react-router';
import renderToStringAsync from '../app/ssr.js';
import reducer from '../app/reducer.js';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

async function serverRender (request, response) {

  const store = createStore(
    reducer,
    applyMiddleware(
      ReduxThunk,
    )
  );

  const context = {}
  const content = await renderToStringAsync(
    <StaticRouter context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );


  const preloaded_state = store.getState();
  const html = renderToStaticMarkup(<Markup  content={content} preloaded_state={preloaded_state}/>);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(html);
  response.end();
}

export default serverRender;
