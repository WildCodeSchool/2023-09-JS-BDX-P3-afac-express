import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { useApp } from "../../context/AppContext";
import Redirection from "../../components/Redirection";

export default function AdminUserManagment() {
  const { removeUser } = useApp();

  return (
    <MDBContainer
      fluid
      className="pt-5 d-flex justify-content-center flex-column"
    >
      <h3
        className=" d-flex justify-content-center fs-1 text text-center fw-bold pt-5 text-uppercase mb-5"
        style={{ color: "#7b273d" }}
      >
        Gestion utilisateur
      </h3>
      <form className="square border pt-3 ps-3 pe-3 mb-4 rounded">
        <h3 className="fs-5 fw-bold pb-3">L'identifiant à aller cherché</h3>
        <MDBInput
          className="mb-4"
          type="pseudo"
          id="form1Example1"
          label="Modifier l'identifant"
        />

        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
      </form>
      <form className="square border pt-3 ps-3 pe-3 mb-4 rounded">
        <h3 className="fs-5 fw-bold pb-3">L'adresse e-mail à aller cherché</h3>

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

        <MDBBtn type="submit" block className="mb-2">
          Réinitialisation de mot de passe
        </MDBBtn>
      </form>

      <MDBBtn className="mt-4 mb-6" onClick={() => removeUser()}>
        Supprimer le compte
      </MDBBtn>

      <Redirection />
    </MDBContainer>
  );
}