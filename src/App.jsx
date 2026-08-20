import { RouterProvider } from "react-router-dom";
import routers from "./routes/AppRoute";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-slate-900">
        <RouterProvider router={routers}></RouterProvider>
      </div>
    </>
  );
}

export default App;
