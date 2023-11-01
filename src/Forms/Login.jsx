import React ,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'


const Login = () => {
  
  const {dark}=useContext(ThemeContext);
  const c= dark ?'light' :'dark';
  return (
    <div style={{height:"585px",textAlign:"center"}} className={c}>
    <input type="text" placeholder='plz enter your email' required style={{marginTop:"0"}}/>
    <input type="password" placeholder='plz enter your password' required/>
    <button >LogIn</button>
<p>Dont have an account <Link to="/Register">Register</Link></p>
    </div>
  )
}

export default Login
