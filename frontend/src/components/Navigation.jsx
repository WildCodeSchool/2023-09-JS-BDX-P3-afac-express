import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
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
        <Link to="/PasswordForgotten">
          <li>PasswordForgotten</li>
        </Link>
        <Link to="/CreateAccount">
          <li>CreateAccount</li>
        </Link>
        <Link to="/User">
          <li>User</li>
        </Link>
        <Link to="/Admin">
          <li>Admin</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navigation;
