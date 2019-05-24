import React, { Fragment } from 'react';
import style from './style.css';
import Item from './components/item';
import LoadingMore  from './components/loading_more'

function List_items (props){
  return (
    <div>
      <div className={style.content_list}>
        {props.items.length > 0 && (
          props.items.map((item) => <Item {...item} key={item.id} />)
        )}
      </div>
      <LoadingMore loading={props.loading}/>
    </div>
  )
}

export default List_items;
