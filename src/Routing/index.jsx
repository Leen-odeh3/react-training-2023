import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Css from "../Pages/Css";
import Html from "../Pages/Html";
import Js from "../Pages/Js";
import Register from "../Forms/Register";
import Login from "../Forms/Login";


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/html" element={<Html/>} />
          <Route path="/css" element={<Css/>} />
          <Route path="/js" element={<Js/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;