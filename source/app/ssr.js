import { renderToString } from 'react-dom/server';
import { useEffect } from 'react';

function isDOM(){
    try{
        var key;
        while(localStorage[key='detect-dom-'+Math.random()]) ;
        localStorage[key]=1;
        return localStorage[key]!==1;
    }catch(err){
        return false;
    }
}

var fetch_list = [];

export function useFetch(wrappedFunction, array) {
  if (!isDOM())
  fetch_list.push(wrappedFunction)
  return useEffect(() => {wrappedFunction()}, array);
}

function get_fetch_list(){
  fetch_list = [];
  return fetch_list;
}

export async function renderToStringAsync  (WrappedAplication)  {
  const fetch_list = get_fetch_list();
  renderToString(WrappedAplication);
  await Promise.all(fetch_list.map((func) => func()));
  return renderToString(WrappedAplication);
}


export default {useFetch, renderToStringAsync};
