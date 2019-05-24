import React, { useEffect } from 'react';
import Container from '../../components/container';
import { connect } from 'react-redux';
import {set_id, load_post, set_initialState } from './flux';
import { useFetch } from '../../ssr'
import style from './style';
import yabbcode from 'ya-bbcode';

let parser = new yabbcode();



function  Post (props){

  useFetch(async () => {
    if (!props.id){
      props.dispatch(set_id(props.match.params.id));
      await props.dispatch(load_post());
    }
  },[]);

  useEffect(() => () => props.dispatch(set_initialState()),[]);

  if (props.data) return (
    <Container>
      <div className={style.body}>
        <h1 className={style.title}>{props.data.title}</h1>
        <section dangerouslySetInnerHTML={{__html: parser.parse(props.data.body)}} />
      </div>
    </Container>
  )

  if (props.loading) return (
    <Container>
      <div className={style.body}>
        <div className={style.preloader_bar} />
        <div className={style.preloader_bar} />
        <div className={style.preloader_bar} />
      </div>
    </Container>
  )

  return null;
}

function mapStateToProps(state){
  return {
    loading: state.pages.post.loading,
    data: state.pages.post.data,
    id: state.pages.post.id,
  }
}

export default connect(mapStateToProps)(Post);
