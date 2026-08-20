import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      
    ],
  },
]);



export default routers;