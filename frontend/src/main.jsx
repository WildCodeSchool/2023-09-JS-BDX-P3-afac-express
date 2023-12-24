import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./App.scss";
// eslint-disable-next-line import/no-extraneous-dependencies
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppContextProvider from "./context/AppContext";
import AdminContextProvider from "./context/AdminContext";
import LikeContextProvider from "./context/LikeContext";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Artworks from "./pages/Artworks";
import Artists from "./pages/Artists";
import About from "./pages/About";
import Login from "./pages/Login";
import User from "./pages/User";
import UserForgottenPassword from "./pages/UserForgottenPassword";
import Register from "./pages/Register";
import AdminArtManager from "./pages/Admin/AdminArtManager";
import AdminUser from "./pages/Admin/AdminUser";
import Admin from "./pages/Admin/Admin";
import AccountManagement from "./pages/AccountManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppContextProvider>
        <LikeContextProvider>
          <App />
        </LikeContextProvider>
      </AppContextProvider>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/gallery/:id", element: <Gallery /> },
      { path: "/artworks", element: <Artworks /> },
      { path: "/artists", element: <Artists /> },
      { path: "/artist/:id", element: <Artists /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/forgottenpassword", element: <UserForgottenPassword /> },
      { path: "/register", element: <Register /> },
      { path: "/user", element: <User /> },
      { path: "/user/:id", element: <User /> },
      // { path: "/admin", element: <Admin /> },
      { path: "/accountmanagement", element: <AccountManagement /> },
      { path: "*", element: <Home /> },

      {
        path: "/admin",
        element: (
          <AdminContextProvider>
            <Admin />
          </AdminContextProvider>
        ),
        children: [
          {
            path: "/adminart",
            element: <AdminArtManager />,
          },
          { path: "/adminuser", element: <AdminUser /> },
          { path: "/adminart", element: <AdminArtManager /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
