import React from 'react';
import style from './style'

function Wrapper ({children}){
  return (
    <div className={style.wrapper}>
      {children}
    </div>
  )
}
export default Wrapper
