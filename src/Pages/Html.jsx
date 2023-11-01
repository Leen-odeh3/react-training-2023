import React, { useContext } from "react";
import Main from "../component/Main";
import "./Ja.scss";
import { ThemeContext } from "../Context/ThemeContext";

const Html= () => {
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
      <Main name="HTML" />
    </div>
  );
};

export default Html;
