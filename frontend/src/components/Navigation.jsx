import React, { useEffect, useState } from "react";
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

export default function Navigation() {
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const { user, isAdmin, logout } = useApp();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  let navigationContent;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (user) {
    if (isAdmin) {
      navigationContent = (
        <MDBDropdown style={{ color: "#ffffff" }}>
          {!isMobile && user.email}
          <MDBDropdownToggle>
            <MDBIcon far icon="user" className="pe-2" />
          </MDBDropdownToggle>

          <MDBDropdownMenu>
            <Link to="/accountmanagement" className="nav-link navLink">
              Mon compte
            </Link>
            <Link to="/User" className="nav-link navLink">
              Ma page personnelle
            </Link>
            <Link to="/admin" className="nav-link navLink">
              Admin
            </Link>
            <Link to="/admin/adminuser" className="nav-link navLink">
              Gérer les utilisateurs
            </Link>
            <Link to="/admin/adminart" className="nav-link navLink">
              Gérer les oeuvres et artistes
            </Link>
            <button
              type="button"
              className="nav-link navLink navButton"
              onClick={logout}
            >
              Déconnexion
            </button>
          </MDBDropdownMenu>
        </MDBDropdown>
      );
    } else {
      navigationContent = (
        <MDBDropdown style={{ color: "#ffffff" }}>
          {!isMobile && user.email}
          <MDBDropdownToggle>
            <MDBIcon far icon="user" className="pe-2" />
          </MDBDropdownToggle>

          <MDBDropdownMenu>
            <Link to="/accountmanagement" className="nav-link navLink">
              Mon compte
            </Link>
            <Link to="/User" className="nav-link navLink">
              Ma page personnelle
            </Link>
            <button
              type="button"
              className="nav-link navLink navButton"
              onClick={logout}
            >
              Déconnexion
            </button>
          </MDBDropdownMenu>
        </MDBDropdown>
      );
    }
  } else {
    navigationContent = (
      <Link to="/login">
        <MDBIcon far icon="user" />
      </Link>
    );
  }

  return (
    <MDBContainer fluid className="row w-100 navigation">
      <MDBNavbar expand="lg" className="containernavbar">
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
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
            <Link className="nav-link navLink" to="/Artists">
              Artistes
            </Link>
            <Link className="nav-link navLink" to="/About">
              À propos
            </Link>
          </MDBNavbarNav>
        </MDBCollapse>
        <div className="logoAfac">
          <Link to="/">
            <img src={logoAfac} className="logoAfac" alt="logoAfac" />
          </Link>
        </div>
        {navigationContent}
      </MDBNavbar>
    </MDBContainer>
  );
}
