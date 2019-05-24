import React from 'react';
import style from './style';
import Wrapper from '../wrapper';
import { Link } from 'react-router-dom';

function Item (props){
  return (
    <Wrapper>
      <div className={style.item}>
        <div className={style.picture} />
        <h1 className={style.title}>{props.title}</h1>
      </div>
    </Wrapper>
  )
}

export default Item;
