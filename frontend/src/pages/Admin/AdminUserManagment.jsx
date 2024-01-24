import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import Redirection from "../../components/Redirection";
import ApiService from "../../services/api.service";

const apiService = new ApiService();

export default function AdminUserManagment() {
  const { id } = useParams();
  const [user, setUser] = useState({
    firstname: "Prénom actuel",
    lastname: "Nom actuel",
    email: "Email actuel",
  });

  const [updatedFirstname, setUpdatedFirstname] = useState("");
  const [updatedLastname, setUpdatedLastname] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const navigate = useNavigate();

  const updateUserData = async () => {
    try {
      const updatedData = {
        firstname: updatedFirstname !== "" ? updatedFirstname : user.firstname,
        lastname: updatedLastname !== "" ? updatedLastname : user.lastname,
        email: updatedEmail !== "" ? updatedEmail : user.email,
      };

      const { data } = await apiService.put(
        `${import.meta.env.VITE_BACKEND_URL}/users/${id}`,
        updatedData
      );
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/users/${id}`
      );
      setUser(data);
    };
    fetchUserData();
  }, [id]);

  const deleteUserData = async () => {
    try {
      const { data } = await apiService.delete(
        `${import.meta.env.VITE_BACKEND_URL}/users/${id}`
      );
      setUser(data);
      navigate("/admin/adminuser");
    } catch (error) {
      console.error(error);
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
        Gestion utilisateur
      </h3>
      <form className="square border pt-3 ps-3 pe-3 mb-4 rounded">
        <h3 className="fs-5 fw-bold pb-3">Modifier le nom</h3>
        <p>{user.firstname}</p>
        <MDBInput
          className="mb-4"
          type="pseudo"
          id="form1Example1"
          label="Modifier le prénom"
          value={updatedFirstname}
          onChange={(e) => setUpdatedFirstname(e.target.value)}
        />
        <MDBBtn type="submit" block className="mb-2" onClick={updateUserData}>
          Valider
        </MDBBtn>
      </form>
      <form className="square border pt-3 ps-3 pe-3 mb-4 rounded">
        <h3 className="fs-5 fw-bold pb-3">Modifier le prénom</h3>
        <p>{user.lastname}</p>
        <MDBInput
          className="mb-4"
          type="pseudo"
          id="form1Example1"
          label="Modifier le nom"
          value={updatedLastname}
          onChange={(e) => setUpdatedLastname(e.target.value)}
        />
        <MDBBtn type="submit" block className="mb-2" onClick={updateUserData}>
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
          value={updatedEmail}
          onChange={(e) => setUpdatedEmail(e.target.value)}
        />

        <MDBBtn type="submit" block className="mb-2" onClick={updateUserData}>
          Valider
        </MDBBtn>
      </form>

      <MDBBtn className="mt-4 mb-6" onClick={deleteUserData}>
        Supprimer le compte
      </MDBBtn>

      <Redirection />
    </MDBContainer>
  );
}
