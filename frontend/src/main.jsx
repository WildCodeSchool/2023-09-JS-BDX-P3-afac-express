import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./App.scss";
// eslint-disable-next-line import/no-extraneous-dependencies
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@fortawesome/fontawesome-free/css/all.min.css";
// eslint-disable-next-line import/no-extraneous-dependencies

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Artworks from "./pages/Artworks";
import Artists from "./pages/Artists";
import About from "./pages/About";
import Login from "./pages/Login";
import User from "./pages/User";
import UserForgottenPassword from "./pages/UserForgottenPassword";
import UserCreateAccount from "./pages/UserCreateAccount";
import AdminUserManager from "./pages/AdminUserManager";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "*", element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/artworks", element: <Artworks /> },
      { path: "/artists", element: <Artists /> },

      { path: "/artist/:id", element: <Artists /> },

      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/forgottenpassword", element: <UserForgottenPassword /> },
      { path: "/createaccount", element: <UserCreateAccount /> },
      { path: "/user", element: <User /> },
      { path: "/createaccount", element: <UserCreateAccount /> },
      { path: "/adminuser", element: <AdminUserManager /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
