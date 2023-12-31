import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../components/pages/Home/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
    ]
    },
  ]);

  export default router