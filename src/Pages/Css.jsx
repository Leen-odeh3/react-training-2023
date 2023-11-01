import React, { useContext, useEffect } from "react";
import Main from "../component/Main";
import "./Ja.scss";
import { ThemeContext } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";
import {auth} from '../Firebase/Config'
import { useAuthState } from 'react-firebase-hooks/auth';

const Css = () => {
const navigate=useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const { dark } = useContext(ThemeContext);

  const c = dark ? "light" : "dark";
  return (
    <div
      className={c}
      style={{
        height: "500px",
        textAlign: "center",
        fontSize: "30px",
        paddingTop: "86px",
      }}
    >
      <Main name="CSS" />
    </div>
  );
};

export default Css;
