import React from 'react';
import style from './style';

function LoadingMore ({loading}){
  return (
    <div className={style.loading_more}>
      {loading && (
        <img src="/public/img/preloader.gif" className={style.picture} />
      )}
    </div>
  )
}

export default LoadingMore;
