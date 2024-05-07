import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Action from "./pages/Action";
import Basket from "./pages/Cart/Basket";
import Ordering from "./pages/Cart/Ordering";
import Accepted from "./pages/Cart/Accepted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/action",
    element: <Action />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/ordering",
    element: <Ordering />,
  },
  {
    path: "/accepted",
    element: <Accepted />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
