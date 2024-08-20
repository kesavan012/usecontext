import React,{useContext} from 'react'
import './Navbar.css'
import { IoLogoSnapchat } from "react-icons/io5";
import {CreContext} from '../Context/CreContext';


const Navbar = () => {
  const {navColor,color,fontColor} = useContext(CreContext)
  return (
    <div id="flex_container" style={{backgroundColor:color}}>
      <ul style={{color:fontColor}}>
        <li id="start"><IoLogoSnapchat size="40px" /></li>
        <li className='content'>Home</li>
        <li className='content'>About</li>
        <li className='content'><button onClick={navColor}>theme</button></li>
      </ul>
    </div>
  )
}

export default Navbar
