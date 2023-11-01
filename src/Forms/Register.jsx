import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div style={{height:"585px",textAlign:"center"}}>
      <p>Create an account</p>
      <input type="text" placeholder='plz enter your name' required/>

    <input type="text" placeholder='plz enter your email' required/>
    <input type="password" placeholder='plz enter your password' required/>
    <button >SignUp</button>
<p> Already have an account<Link to="/Login">  login</Link></p>
    </div>
  )
}

export default Register
