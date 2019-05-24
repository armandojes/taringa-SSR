import React, { Fragment } from 'react';
import Header from './components/header';
import {Switch, Route} from 'react-router';
import 'reset-css';
import './app.css';

//pages
import Posts from './pages/posts';
import Post from './pages/post';
import User from './pages/user';

function App (props) {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/post/:id" exact component={Post} />
        <Route path="/user" exact component={User} />
      </Switch>
    </Fragment>
  )
}


export default App;
