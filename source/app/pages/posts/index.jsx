import React, { useEffect } from 'react';
import Container from '../../components/container';
import {load_posts} from '../../flux/posts';
import { connect } from 'react-redux';
import List_items from '../../components/list_items'
import useScrolle from '../../hocks/subscribe_scroll'
import { useFetch } from '../../ssr.js'
function  Posts (props){

  useFetch(async ()=>{
    if (props.items.length === 0)
    await props.dispatch(load_posts())
  });

  useScrolle(() => {props.dispatch(load_posts())})

  return (
    <Container>
      <List_items {...props}/>
    </Container>
  )
}

function mapStateToProps(state){
  return {
    loading: state.posts.loading,
    items: state.posts.items
  }
}

export default connect(mapStateToProps)(Posts);
