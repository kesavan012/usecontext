import React,{useContext} from 'react';
import './Footer.css';
import {CreContext} from '../Context/CreContext';

const Footer = () => {
  const {color2,fontColor} = useContext(CreContext)
  return (
    <div id='foot' style={{backgroundColor:color2}}>
      <p id='para1' style={{color:fontColor}}>CopyrightBy2024</p>
    </div>
  )
}

export default Footer
