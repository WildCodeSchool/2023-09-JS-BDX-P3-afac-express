import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import "../style/Navbar.scss";
import "../style/About.scss";
import { useApp } from "../context/AppContext";
import logoAfac from "../assets/logo/logoAfac.png";

export default function Navigation() {
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const [openNavIcon, setOpenNavIcon] = useState(false);
  const { user, isAdmin, logout } = useApp();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let navigationContent;

  const closeDropdownThenNavigate = (url) => {
    navigate(url);
    setOpenNavIcon(!openNavIcon);
  };

  if (user) {
    if (isAdmin) {
      navigationContent = (
        <MDBDropdown style={{ color: "#ffffff" }}>
          {!isMobile && user.email}

          <MDBDropdownToggle
            style={{
              background: "none",
              border: "none",
              boxShadow: "none",
            }}
          >
            <MDBIcon far icon="user" className="pe-2" />
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem
              onClick={() => closeDropdownThenNavigate("/accountmanagement")}
              className="nav-link navLink"
            >
              <span className="mx-2 my-2">Mon compte</span>
            </MDBDropdownItem>
            <MDBDropdownItem
              className="nav-link navLink"
              onClick={() => closeDropdownThenNavigate("/User")}
            >
              <span className="mx-2 my-2">Ma page personnelle</span>
            </MDBDropdownItem>
            <MDBDropdownItem
              className="nav-link navLink"
              onClick={() => closeDropdownThenNavigate("/admin")}
            >
              <span className="mx-2 my-2">Admin</span>
            </MDBDropdownItem>
            <MDBDropdownItem
              className="nav-link navLink"
              onClick={() => closeDropdownThenNavigate("/admin/adminuser")}
            >
              <span className="mx-2 my-2">Gérer les utilisateurs</span>
            </MDBDropdownItem>
            <MDBDropdownItem
              className="nav-link navLink"
              onClick={() => closeDropdownThenNavigate("/admin/adminart")}
            >
              <span className="mx-2 my-2">Gérer les oeuvres/artistes</span>
            </MDBDropdownItem>

            <button
              type="button"
              className="nav-link navLink navButton"
              onClick={logout}
            >
              <span className="mx-2 my-2">Déconnexion</span>
            </button>
          </MDBDropdownMenu>
        </MDBDropdown>
      );
    } else {
      navigationContent = (
        <MDBDropdown style={{ color: "#ffffff" }}>
          {!isMobile && user.email}
          <MDBDropdownToggle onClick={() => setOpenNavIcon(!openNavIcon)}>
            <MDBIcon far icon="user" className="pe-2" />
          </MDBDropdownToggle>

          <MDBDropdownMenu>
            <MDBDropdownItem
              onClick={() => closeDropdownThenNavigate("/accountmanagement")}
              className="nav-link navLink"
            >
              <span className="mx-2 my-2">Mon compte</span>
            </MDBDropdownItem>

            <MDBDropdownItem
              className="nav-link navLink"
              onClick={() => closeDropdownThenNavigate("/User")}
            >
              <span className="mx-2 my-2">Ma page personnelle</span>
            </MDBDropdownItem>

            <button
              type="button"
              className="nav-link navLink navButton"
              onClick={logout}
            >
              <span className="mx-2 my-2">Déconnexion</span>
            </button>
          </MDBDropdownMenu>
        </MDBDropdown>
      );
    }
  } else {
    navigationContent = (
      <Link to="/login" className="user-icon">
        <MDBIcon className="me-2" far icon="user" />
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
            <Link
              className="nav-link navLink"
              to="/home"
              onClick={() => setOpenNavSecond(false)}
            >
              Accueil
            </Link>
            <Link
              className="nav-link navLink"
              to="/gallery"
              onClick={() => setOpenNavSecond(false)}
            >
              Galerie
            </Link>
            <Link
              className="nav-link navLink"
              to="/artists"
              onClick={() => setOpenNavSecond(false)}
            >
              Artistes
            </Link>
            <Link
              className="nav-link navLink"
              to="/about"
              onClick={() => setOpenNavSecond(false)}
            >
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
