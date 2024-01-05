import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { useApp } from "../../context/AppContext";
import Redirection from "../../components/Redirection";

export default function AdminUserManagment() {
  const { removeUser } = useApp();
  const { id } = useParams();
  const [user, setUser] = useState({
    firstname: "Prénom actuel",
    lastname: "Nom actuel",
    email: "Email actuel",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await axios.get(`http://localhost:5021/users/${id}`);
      setUser(data);
    };
    fetchUserData();
  }, [id]);

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
        <h3 className="fs-5 fw-bold pb-3">Modifier les identifiants</h3>
        <p>{user.firstname}</p>
        <MDBInput
          className="mb-4"
          type="pseudo"
          id="form1Example1"
          label="Modifier le prénom"
        />
        <p>{user.lastname}</p>
        <MDBInput
          className="mb-4"
          type="pseudo"
          id="form1Example1"
          label="Modifier le nom"
        />
        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
      </form>
      <form className="square border pt-3 ps-3 pe-3 mb-4 rounded">
        <h3 className="fs-5 fw-bold pb-3">Modifier l'adresse e-mail</h3>
        <p>{user.email}</p>
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
