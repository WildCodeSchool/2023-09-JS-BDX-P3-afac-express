import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import "../style/Navbar.scss";
import "../style/About.scss";
import profil from "../assets/navbar/profil.png";

export default function Navigation() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  return (
    <div className="Navigation">
      <MDBNavbar expand="lg">
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavSecond(!openNavSecond)}
          >
            <MDBIcon icon="bars" fas color="white" className="d-inline" />
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
        </MDBContainer>
      </MDBNavbar>
      <div className="profilUser">
        <MDBNavbarLink href="/login" className="userlogo">
          <img src={profil} className="profil" alt="profil" />
        </MDBNavbarLink>
      </div>
    </div>
  );
}
