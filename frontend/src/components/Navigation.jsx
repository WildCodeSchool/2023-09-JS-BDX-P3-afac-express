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
  MDBNavbarLink,
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
            <MDBNavbarLink className="navLink" href="/Home">
              Accueil
            </MDBNavbarLink>
            <MDBNavbarLink className="navLink" href="/Gallery">
              Galerie
            </MDBNavbarLink>
            <MDBNavbarLink className="navLink" href="/Artworks">
              Oeuvres
            </MDBNavbarLink>
            <MDBNavbarLink className="navLink" href="/Artists">
              Artistes
            </MDBNavbarLink>
            <MDBNavbarLink className="navLink" href="/About">
              A propos
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
        <div className="logoAfac">
          <MDBNavbarLink>
            <img src={logoAfac} className="logoAfac" alt="logoAfac" />
          </MDBNavbarLink>
        </div>
        {user ? (
          <MDBDropdown>
            <MDBNavbarLink>
              <MDBDropdownToggle>
                <MDBIcon far icon="user" />
              </MDBDropdownToggle>
            </MDBNavbarLink>

            <MDBDropdownMenu>
              <Link to="/accountmanagement" className="nav-link navLink">
                Mon compte
              </Link>
              <Link to="/User" className="nav-link navLink">
                Ma page personnelle
              </Link>
              <Link to="/adminuser" className="nav-link navLink">
                Gérer les utilisateurs
              </Link>
              <Link to="/adminart" className="nav-link navLink">
                Gérer les oeuvres et artistes
              </Link>
              <button
                type="button"
                className="nav-link navLink navButton"
                onClick={() => logout()}
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
