import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Config";

const Register = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  const { dark } = useContext(ThemeContext);
  const c = dark ? "light" : "dark";
  return (
    <div style={{ height: "585px", textAlign: "center" }} className={c}>
      <p>Create an account</p>
      <input
        type="text"
        placeholder="plz enter your name"
        required
        onChange={(e) => setname(e.target.value)}
      />

      <input
        type="text"
        placeholder="plz enter your email"
        required
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
          
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
        }}
      >
        SignUp
      </button>
      <p>
        {" "}
        Already have an account<Link to="/Login"> login</Link>
      </p>
    </div>
  );
};

export default Register;
