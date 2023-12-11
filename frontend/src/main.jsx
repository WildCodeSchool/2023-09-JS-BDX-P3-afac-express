import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import Accueil from "./pages/Accueil";
import Galeries from "./pages/Galeries";
import Oeuvres from "./pages/Oeuvres";
import Artistes from "./pages/Artistes";
import Apropos from "./pages/Apropos";
import Login from "./pages/Login";
import MdpOublie from "./pages/MdpOublie";
import CreationCompte from "./pages/CreationCompte";
import Utilisateur from "./pages/Utilisateur";
import Admin from "./pages/Admin";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "*", element: <Accueil /> },
      { path: "/", element: <Accueil /> },
      { path: "/Galeries", element: <Galeries /> },
      { path: "/Oeuvres", element: <Oeuvres /> },
      { path: "/Artistes", element: <Artistes /> },
      { path: "/Apropos", element: <Apropos /> },
      { path: "/Login", element: <Login /> },
      { path: "/MdpOublie", element: <MdpOublie /> },
      { path: "/CreationCompte", element: <CreationCompte /> },
      { path: "/Utilisateur", element: <Utilisateur /> },
      { path: "/Admin", element: <Admin /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
