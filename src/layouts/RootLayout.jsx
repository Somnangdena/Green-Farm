import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Scroll from "./Scroll";

const RootLayout = () => {
  return (
    <>
      <Scroll />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
