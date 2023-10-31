import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const index = () => {
  return (
    <div>
      <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </div>
  )
}

export default index