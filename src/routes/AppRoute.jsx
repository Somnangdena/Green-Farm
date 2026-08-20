import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import About from "../pages/About";
import Product from "../pages/product";
import Contact from "../pages/contact";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routers;
