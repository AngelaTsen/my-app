import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import {Home} from "./Home";
import {Recipe} from "./Recipe";
import {Сatalog} from "./Сatalog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Сatalog />,
  }, 
  {
    path: "/",
    element: <Recipe />,
  }, 
]);

export default router