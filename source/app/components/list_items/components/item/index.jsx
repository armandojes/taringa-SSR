import React from 'react';
import style from './style';
import Wrapper from '../wrapper';

function Item (props){
  return (
    <Wrapper>
      <div className={style.item}>
        <img src={props.images[0].url} className={style.picture} />
        <h1 className={style.title}>{props.title}</h1>
      </div>
    </Wrapper>
  )
}

export default Item;
