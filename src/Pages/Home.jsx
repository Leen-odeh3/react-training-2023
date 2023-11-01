import React, { useContext } from "react";
import Main from "../component/Main";
// import Usestate from "../component/Usestate/Usestate"
// import Usereducer from '../component/Usereducer/Usereducer'
import "./Ja.scss";
import { ThemeContext } from "../Context/ThemeContext";

const Home = () => {
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
      <Main name="HOME" />
        {/* <Usestate/> */}
    {/* <Usereducer/> */}
    </div>
  );
};

export default Home;








