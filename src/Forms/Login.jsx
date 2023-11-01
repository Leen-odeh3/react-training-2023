
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Config";

const Login = () => {
  const navigate = useNavigate();
  const { dark } = useContext(ThemeContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const[haserror,sethaserror]=useState(false);
  const[message,setmessage]=useState();

  const c = dark ? "light" : "dark";
  return (
    <div style={{ height: "585px", textAlign: "center" }} className={c}>
      <input
        type="email"
        placeholder="plz enter your email"
        required
        style={{ marginTop: "0" }}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="password"
        placeholder="plz enter your password"
        required
        onChange={(e) => setpassword(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();

         
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
             navigate("/");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              sethaserror(!haserror);
              setmessage(errorCode);
            });
           
        }} 
      >
        LogIn
      </button>
      <p>
        Dont have an account <Link to="/Register">Register</Link>
      </p>

      {haserror && <h5 style={{color:"red"}}> {message}</h5> }
    </div>
  );
};

export default Login;
