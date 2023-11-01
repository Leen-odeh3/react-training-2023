import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext';
import './Header.scss'


const Header = () => {

  const {dark,toggle}=useContext(ThemeContext);

  const c= dark?'light':'dark';
  return (
    <div  className={c} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 40px"}}>
     <Link to="/"><h1>Dev.</h1></Link>
     <button onClick={toggle}>Toggle</button>
     <div >

      <NavLink to="/Login">Sign in </NavLink>
      <NavLink to="/Register">Sign up </NavLink>
      {/* <NavLink to="/html">HTML </NavLink>
      <NavLink to="/css" style={{margin:"0px 20px"}}>CSS </NavLink>
      <NavLink to="/js"> JS</NavLink> */}
     </div>
    </div>
  )
}

export default Header
