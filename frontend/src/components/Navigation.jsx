import React, { useState } from "react";
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
import logoAfac from "../assets/logo/logoAfac.png";
import { useApp } from "../context/AppContext";

export default function Navigation() {
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const { user, logout, setLoggedInUser } = useApp();

  const handleLogout = () => {
    if (user) {
      setLoggedInUser(user);
      setOpenNavSecond(false);
      logout();
    }
  };

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
        {user.connected ? (
          <MDBDropdown>
            <MDBNavbarLink>
              <MDBDropdownToggle>
                <MDBIcon far icon="user" />
              </MDBDropdownToggle>
            </MDBNavbarLink>

            <MDBDropdownMenu>
              <MDBNavbarLink href="/User">Mon compte</MDBNavbarLink>
              <MDBNavbarLink href="/User">Ma page personnelle</MDBNavbarLink>
              <MDBNavbarLink href="/adminuser">
                Gérer les utilisateurs
              </MDBNavbarLink>
              <MDBNavbarLink href="/adminart">
                Gérer les oeuvres et artistes
              </MDBNavbarLink>
              <MDBNavbarLink onClick={handleLogout}>Déconnexion</MDBNavbarLink>
            </MDBDropdownMenu>
          </MDBDropdown>
        ) : (
          <MDBNavbarLink href="/login">
            <MDBIcon far icon="user" />
          </MDBNavbarLink>
        )}
      </MDBNavbar>
    </MDBContainer>
  );
}
