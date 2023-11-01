import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext';
import './Header.scss'


const Header = () => {

  const {dark,toggle}=useContext(ThemeContext);

  const c= dark?'light':'dark';
  return (
    <div  className={c}>
     <Link to="/"><h1>Dev. </h1></Link>
     <button onClick={toggle}>Toggle</button>
     <div >
      <NavLink to="/html">HTML </NavLink>
      <NavLink to="/css" style={{margin:"0px 20px"}}>CSS </NavLink>
      <NavLink to="/js"> JS</NavLink>
     </div>
    </div>
  )
}

export default Header
