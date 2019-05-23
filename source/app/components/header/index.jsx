import React from 'react';
import style from './style.css'
import Container from '../container';


function header (props) {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.header_body}>
          <img src="/public/img/logo.png" className={style.logo} />
          React + Redux + SSR
          </div>
      </Container>
    </header>
  )
}

export default header;
