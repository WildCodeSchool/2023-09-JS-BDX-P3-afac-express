import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

function AccountManagement() {
  const { user, logout, setLoggedInUser } = useApp();

  const navigate = useNavigate();

  const handleLogout = () => {
    if (user) {
      setLoggedInUser(user);
      logout();
      navigate("/home");
    }
  };
  return (
    <MDBContainer
      fluid
      className="pt-5 d-flex justify-content-center flex-column"
    >
      <h3
        className=" d-flex justify-content-center fs-1 text text-center fw-bold pt-5 text-uppercase mb-5"
        style={{ color: "#7b273d" }}
      >
        Administrateur
      </h3>
      <form className="square border pt-3 ps-3 pe-3 mb-4 rounded">
        <h3 className="fs-5 fw-bold pb-3">Changement d'adresse e-mail</h3>

        <MDBInput
          className="mb-4"
          type="email"
          id="form1Example1"
          label="Ancienne adresse email"
        />

        <MDBInput
          className="mb-4"
          type="email"
          id="form1Example1"
          label="Nouvelle adresse email"
        />

        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
      </form>

      <form className="square border pt-3 ps-3 pe-3 mb-4 rounded">
        <h3 className="fs-5 fw-bold pb-3">Changement de mot de passe</h3>
        <MDBInput
          className="mb-4"
          type="password"
          id="form1Example1"
          label="Ancien mot de passe"
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form1Example2"
          label="Nouveau mot de passe"
        />

        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
      </form>

      <MDBBtn className="mt-4 mb-6" onClick={handleLogout}>
        Déconnexion
      </MDBBtn>
    </MDBContainer>
  );
}

export default AccountManagement;
