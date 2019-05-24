import React, { Fragment } from 'react';
import style from './style.css';
import Item from './components/item';
import ItemLoading from './components/item_loading';
import LoadingMore  from './components/loading_more'

function List_items (props){
  return (
    <div>
      {props.items.length > 0 && (
        <Fragment>
          <div className={style.content_list}>
            {props.items.map((item) => <Item {...item} key={item.id} />)}
          </div>
          <LoadingMore loading={props.loading}/>
        </Fragment>
      )}

      {props.items.length === 0 && props.loading && (
        <div className={style.content_list}>
          <ItemLoading />
          <ItemLoading />
          <ItemLoading />
          <ItemLoading />
          <ItemLoading />
          <ItemLoading />
          <ItemLoading />
          <ItemLoading />
        </div>
      )}
    </div>
  )
}

export default List_items;
