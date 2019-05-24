import React from 'react';
import style from './style';

function Post (props){
  return (
    <article className={style.post}>
      <img className={style.picture} src={props.images[0].url} />
      <div>
        <h1>{props.title}</h1>
      </div>
    </article>
  )
}

export default Post;
