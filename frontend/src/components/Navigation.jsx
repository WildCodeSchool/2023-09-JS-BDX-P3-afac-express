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

export default function Navigation() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  return (
    <MDBContainer fluid className="row w-100 navigation">
      <MDBNavbar expand="lg" className="containernavbar">
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon="bars" fas color="white" className="" />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav className="ms-auto">
            <MDBNavbarLink href="/Home">Accueil</MDBNavbarLink>
            <MDBNavbarLink href="/Gallery">Galerie</MDBNavbarLink>
            <MDBNavbarLink href="/Artworks">Oeuvres</MDBNavbarLink>
            <MDBNavbarLink href="/Artists">Artistes</MDBNavbarLink>
            <MDBNavbarLink href="/About">A propos</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
        <div>
          <MDBNavbarLink className="logoAfac">
            <img src={logoAfac} className="logoAfac" alt="logoAfac" />
          </MDBNavbarLink>
        </div>

        <MDBDropdown>
          <MDBDropdownToggle>
            <MDBIcon far icon="user" />
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBNavbarLink href="/adminuser">
              Gérer les utilisateurs
            </MDBNavbarLink>
            <MDBNavbarLink href="/adminart">
              Gérer les oeuvres et artistes
            </MDBNavbarLink>
            <MDBNavbarLink href="/User">Gérer mon compte</MDBNavbarLink>
            <MDBNavbarLink href="/Home">Déconnexion</MDBNavbarLink>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavbar>
    </MDBContainer>
  );
}
