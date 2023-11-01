import React ,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase/Config';


const Login = () => {
  
  const {dark}=useContext(ThemeContext);
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  const c= dark ?'light' :'dark';
  return (
    <div style={{height:"585px",textAlign:"center"}} className={c}>
    <input type="text" placeholder='plz enter your email' required style={{marginTop:"0"}} onChange={(e)=>setemail(e.target.value)}/>
    <input type="password" placeholder='plz enter your password' required onChange={(e)=>setpassword(e.target.value)}/>
    <button onClick={(e)=>{
      e.preventDefault();

  
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }}>LogIn</button>
<p>Dont have an account <Link to="/Register">Register</Link></p>
    </div>
  )
}

export default Login
