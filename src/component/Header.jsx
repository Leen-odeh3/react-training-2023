import React, { useContext } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import "./Header.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Config";
import { getAuth, signOut } from "firebase/auth";


const Header = () => {
  const navigate=useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const { dark, toggle } = useContext(ThemeContext);

  const c = dark ? "light" : "dark";
  return (
    <div
      className={c}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 40px",
      }}
    >
      <Link to="/">
        <h1>Dev.</h1>
      </Link>
      <button onClick={toggle}>Toggle</button>
      <div>
        {!user && (
          <>
            <NavLink to="/Login">Sign in </NavLink>
            <NavLink to="/Register">Sign up </NavLink>{" "}
          </>
        )}
        {user && (
          <>
            <NavLink to="/html">HTML </NavLink>
            <NavLink to="/css" style={{ margin: "0px 20px" }}>
              CSS
            </NavLink>
            <NavLink to="/js"> JS</NavLink>
            <NavLink to="/profile" style={{margin:"0px 10px"}}>Profile</NavLink>
            <NavLink to="/login" onClick={()=>{
              const auth = getAuth();
              navigate("/Login");
              signOut(auth).then(() => {
                // Sign-out successful.
              }).catch((error) => {
                // An error happened.
              });
              
            }}>Sign out</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
