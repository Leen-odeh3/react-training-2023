import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{height:"585px",textAlign:"center"}}>
    <input type="text" placeholder='plz enter your email' required/>
    <input type="password" placeholder='plz enter your password' required/>
    <button >LogIn</button>
<p>Dont have an account <Link to="/Register">Register</Link></p>
    </div>
  )
}

export default Login
