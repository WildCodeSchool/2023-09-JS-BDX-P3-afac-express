import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./App.scss";
// eslint-disable-next-line import/no-extraneous-dependencies
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Artworks from "./pages/Artworks";
import Artists from "./pages/Artists";
import About from "./pages/About";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import User from "./pages/User";
import Admin from "./pages/Admin";
import UserForgottenPassword from "./pages/UserForgottenPassword";
import UserCreateAccount from "./pages/UserCreateAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Gallery", element: <Gallery /> },
      { path: "/Artworks", element: <Artworks /> },
      { path: "/Artists", element: <Artists /> },

      { path: "/Artist/:id", element: <Artists /> },

      { path: "/About", element: <About /> },
      { path: "/Login", element: <Login /> },
      { path: "/UserForgottenPassword", element: <UserForgottenPassword /> },
      { path: "/CreateAccount", element: <CreateAccount /> },
      { path: "/User", element: <User /> },
      { path: "/Admin", element: <Admin /> },
      { path: "/UserForgottenPassword", element: <UserForgottenPassword /> },
      { path: "/UserCreateAccount", element: <UserCreateAccount /> },
      { path: "*", element: <Home /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
