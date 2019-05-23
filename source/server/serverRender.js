import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
import Markup from './markup.jsx';
// import App from '../app/app.jsx';
import { renderToString } from 'react-dom/server';

function serverRender (request, response) {
  //const content =renderToString(<App />);
  const html = renderToStaticMarkup(<Markup />);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(html);
  response.end();
}

export default serverRender;
