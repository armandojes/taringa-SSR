import React, { Fragment } from 'react';
import Header from './components/header';
import 'reset-css';
import './app.css';

function App (props) {
  return (
    <Fragment>
      <Header />
      <div>
        body page...
      </div>
    </Fragment>
  )
}


export default App;
