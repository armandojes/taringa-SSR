import React from 'react';
import style from './style';
import Wrapper from '../wrapper';
import { Link } from 'react-router-dom';

function Item (props){
  return (
    <Wrapper>
      <Link className={style.item} to={`/post/${props.id}`}>
        <img src={props.images[0].url} className={style.picture} />
        <h1 className={style.title}>{props.title}</h1>
      </Link>
    </Wrapper>
  )
}

export default Item;
