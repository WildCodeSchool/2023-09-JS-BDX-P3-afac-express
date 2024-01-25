import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./App.scss";
// eslint-disable-next-line import/no-extraneous-dependencies
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "mdb-react-ecommerce-gallery/dist/css/ecommerce-gallery.min.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppContextProvider from "./context/AppContext";
import AdminContextProvider from "./context/AdminContext";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

import Artworks from "./pages/Artworks";
import Artists from "./pages/Artists";
import About from "./pages/About";
import Login from "./pages/Login";
import User from "./pages/User";
import Register from "./pages/Register";
import VerificationLogin from "./pages/VerificationLogin";
import ResetPassword from "./pages/ResetPassword";
import AdminArt from "./pages/Admin/AdminArt";
import AdminArtistManager from "./pages/Admin/AdminArtistManager";
import AdminArtworkManager from "./pages/Admin/AdminArtworkManager";
import AdminUser from "./pages/Admin/AdminUser";
import Admin from "./pages/Admin/Admin";
import AccountManagement from "./pages/AccountManagement";
import AdminUserManagement from "./pages/Admin/AdminUserManagment";
import AdminHome from "./pages/Admin/AdminHome";
import ApiService from "./services/api.service";
import globalAppLoader from "./loaders/global-app.loader";
import artistIdLoader from "./loaders/artistid.loader";

const apiService = new ApiService();

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => globalAppLoader(apiService),
    element: (
      <AppContextProvider apiService={apiService}>
        <App />
      </AppContextProvider>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },

      { path: "/gallery/:id", element: <Gallery /> },
      { path: "/artworks", element: <Artworks /> },
      {
        path: "/artworks/:id",
        element: <Artworks />,
        loader: async ({ params }) => artistIdLoader(apiService, params),
      },
      { path: "/artists", element: <Artists /> },
      { path: "/artist/:id", element: <Artists /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/verificationlogin", element: <VerificationLogin /> },
      { path: "/resetpassword", element: <ResetPassword /> },
      { path: "/register", element: <Register /> },
      { path: "/user", element: <User /> },
      { path: "/user/:id", element: <User /> },
      { path: "/accountmanagement", element: <AccountManagement /> },
      {
        path: "/admin",
        element: (
          <AdminContextProvider>
            <Admin />
          </AdminContextProvider>
        ),
        children: [
          { path: "/admin", element: <AdminHome /> },
          { path: "/admin/adminuser", element: <AdminUser /> },
          {
            path: "/admin/adminart",
            element: <AdminArt />,
          },
          {
            path: "/admin/adminartistmanager/:id",
            element: <AdminArtistManager />,
          },
          {
            path: "/admin/adminartworkmanager/:id",
            element: <AdminArtworkManager />,
          },
          {
            path: "/admin/adminusermanagement/:id",
            element: <AdminUserManagement />,
          },
        ],
      },
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
