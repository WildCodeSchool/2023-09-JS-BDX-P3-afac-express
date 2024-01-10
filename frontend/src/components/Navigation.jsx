import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBDropdownToggle,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBDropdown,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";
import "../style/Navbar.scss";
import "../style/About.scss";
import { useApp } from "../context/AppContext";
import logoAfac from "../assets/logo/logoAfac.png";

export default function ation() {
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const { user, logout } = useApp();

  return (
    <MDBContainer fluid className="row w-100 ation">
      <MDBNavbar expand="lg" className="containernavbar">
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle ation"
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon="bars" fas color="white" />
        </MDBNavbarToggler>
        <MDBCollapse className="navbar-display" navbar open={openNavSecond}>
          <MDBNavbarNav className="ms-auto">
            <Link className="nav-link navLink" to="/Home">
              Accueil
            </Link>
            <Link className="nav-link navLink" to="/Gallery">
              Galerie
            </Link>
            <Link className="nav-link navLink" to="/Artworks">
              Oeuvres
            </Link>
            <Link className="nav-link navLink" to="/Artists">
              Artistes
            </Link>
            <Link className="nav-link navLink" to="/About">
              A propos
            </Link>
          </MDBNavbarNav>
        </MDBCollapse>
        <div className="logoAfac">
          <Link to="/">
            <img src={logoAfac} className="logoAfac" alt="logoAfac" />
          </Link>
        </div>
        {user ? (
          <MDBDropdown>
            <MDBDropdownToggle>
              {user.email}
              <MDBIcon far icon="user" className="pe-2 ps-4" />
            </MDBDropdownToggle>

            <MDBDropdownMenu>
              <Link to="/accountmanagement" className="nav-link navLink">
                Mon compte
              </Link>
              <Link to="/User" className="nav-link navLink">
                Ma page personnelle
              </Link>
              {/* {isAdmin && (
                <> */}
              <Link to="/admin" className="nav-link navLink">
                Admin
              </Link>
              <Link to="/admin/adminuser" className="nav-link navLink">
                Gérer les utilisateurs
              </Link>
              <Link to="/admin/adminart" className="nav-link navLink">
                Gérer les oeuvres et artistes
              </Link>
              {/* </>
              )} */}

              <button
                type="button"
                className="nav-link navLink navButton"
                onClick={logout}
              >
                Déconnexion
              </button>
            </MDBDropdownMenu>
          </MDBDropdown>
        ) : (
          <Link to="/login">
            <MDBIcon far icon="user" />
          </Link>
        )}
      </MDBNavbar>
    </MDBContainer>
  );
}
