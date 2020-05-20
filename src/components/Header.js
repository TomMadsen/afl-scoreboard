import React from 'react';
import Timer from './Timer'
const Header = (props) => {
  


  return (
  <header>
    <h1>{props.title}</h1>
    <Timer />
  </header>
  )
  
    
  
  
}

export default Header