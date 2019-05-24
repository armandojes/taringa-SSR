import { renderToString } from 'react-dom/server';
import { useEffect } from 'react';

var fetch_list = [];
var runtime = 'browser';

export function useFetch(wrappedFunction, array) {
  return runtime === 'node'
  ? fetch_list.push(wrappedFunction)
  : useEffect(() => {wrappedFunction()}, array);
}

function get_fetch_list(){
  fetch_list = [];
  return fetch_list;
}

export async function renderToStringAsync  (WrappedAplication)  {
  runtime = 'node';
  const fetch_list = get_fetch_list();
  renderToString(WrappedAplication);
  await Promise.all(fetch_list.map((func) => func()));
  return renderToString(WrappedAplication);
}


export default renderToStringAsync;
