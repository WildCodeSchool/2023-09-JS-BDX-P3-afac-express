import { Link } from "react-router-dom";
import "../styles/navbar.scss";

function Navigation() {
  return (
    <div className="Navigation">
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
        <Link to="/User">
          <li>User</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navigation;
