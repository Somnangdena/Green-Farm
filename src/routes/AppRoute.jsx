import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import About from "../pages/About";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";

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
        path: "/product/:id",
        element: <ProductDetail />,
        errorElement: <NotFound />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routers;
