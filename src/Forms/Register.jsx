import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div style={{height:"585px",textAlign:"center"}}>
      <p>Create an account</p>
      <input type="text" placeholder='plz enter your name'/>

    <input type="text" placeholder='plz enter your email'/>
    <input type="text" placeholder='plz enter your email'/>
    <button >SignUp</button>
<p> Already have an account<Link to="/Login">  login</Link></p>
    </div>
  )
}

export default Register
