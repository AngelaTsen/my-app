import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import {Home} from "./Home";
import {Recipe} from "./Recipe";
import {Catalog} from "./Catalog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Catalog />,
  }, 
  {
    path: "/",
    element: <Recipe />,
  }, 
]);

export default router
