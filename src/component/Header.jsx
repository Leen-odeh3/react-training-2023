import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",
    alignItems:"center",padding:"10px 50px"}}>
     <h1>Dev.</h1>
     <div>
      <NavLink to="/html">HTML </NavLink>
      <NavLink to="/css" style={{margin:"0px 20px"}}>CSS </NavLink>
      <NavLink to="/js"> JS</NavLink>
     </div>
    </div>
  )
}

export default Header
