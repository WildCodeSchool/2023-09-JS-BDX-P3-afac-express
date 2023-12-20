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
import logoAfac from "../assets/logo/logoAfac.png";

export default function Navigation() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  return (
    <MDBContainer fluid className="row w-100 navigation">
      <MDBNavbar expand="lg" className="">
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

        <div className="profilUser">
          <MDBNavbarLink href="/login" className="userlogo">
            <img src={profil} className="profil" alt="profil" />
          </MDBNavbarLink>
        </div>
      </MDBNavbar>
    </MDBContainer>
  );
}
