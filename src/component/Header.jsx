import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",
    alignItems:"center",padding:"0px 50px",backgroundColor:"#242424",color:"white"}}>
     <Link to="/"><h1>Dev. </h1></Link>
     <div >
      <NavLink to="/html">HTML </NavLink>
      <NavLink to="/css" style={{margin:"0px 20px"}}>CSS </NavLink>
      <NavLink to="/js"> JS</NavLink>
     </div>
    </div>
  )
}

export default Header
