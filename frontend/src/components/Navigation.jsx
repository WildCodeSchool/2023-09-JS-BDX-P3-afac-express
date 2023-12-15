import React from "react";
import { Link } from "react-router-dom";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import "../style/Navbar.scss";
import "../style/About.scss";
import profil from "../assets/navbar/profil.png";

export default function Navigation() {
  return (
    <div className="Navigation">
      <MDBDropdown>
        <MDBDropdownToggle color="black">Menu</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>
            <Link to="/Home">Accueil</Link>
          </MDBDropdownItem>
          <MDBDropdownItem link>
            {" "}
            <Link to="/Gallery">Galerie</Link>
          </MDBDropdownItem>
          <MDBDropdownItem link>
            <Link to="/Artworks">Oeuvres</Link>
          </MDBDropdownItem>
          <MDBDropdownItem link>
            <Link to="/Artists">Artistes</Link>
          </MDBDropdownItem>
          <MDBDropdownItem link>
            <Link to="/About">A propos</Link>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <ul>
        <Link to="/Home">
          <li>Accueil</li>
        </Link>
        <Link to="/Gallery">
          <li>Galerie</li>
        </Link>
        <Link to="/Artworks">
          <li>Oeuvres</li>
        </Link>
        <Link to="/Artists">
          <li>Artistes</li>
        </Link>
        <Link to="/About">
          <li>A Propos</li>
        </Link>
      </ul>
      <div className="profilUser">
        {" "}
        <Link to="/User" className="userlogo">
          <img src={profil} className="profil" alt="profil" />
        </Link>
      </div>
    </div>
  );
}
