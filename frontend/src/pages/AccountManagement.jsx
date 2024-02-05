import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import ApiService from "../services/api.service";

const apiService = new ApiService();

function AccountManagement() {
  const { logout, user, setUser } = useApp();
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = async (event) => {
    event.preventDefault();
    try {
      const response = await apiService.patch(
        `${import.meta.env.VITE_BACKEND_URL}/change/email`,
        {
          oldEmail,
          newEmail,
        }
      );

      if (response.status === 204) {
        alert("L'adresse e-mail a été modifiée avec succès."); // eslint-disable-line no-alert

        setUser((prevUserData) => ({
          ...prevUserData,
          email: newEmail,
        }));
      } else {
        alert("Échec de la modification de l'adresse e-mail."); // eslint-disable-line no-alert
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePasswordChange = async (event) => {
    event.preventDefault();
    try {
      const response = await apiService.patch(
        `${import.meta.env.VITE_BACKEND_URL}/change/password`,
        {
          oldPassword,
          newPassword,
        }
      );

      if (response.status === 204) {
        alert("Le mot de passe a été modifiée avec succès."); // eslint-disable-line no-alert
        logout();
        navigate("/login");
      } else {
        alert("Échec de la modification du mot de passe."); // eslint-disable-line no-alert
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deletePersonalAccount = async () => {
    try {
      const response = await apiService.delete(
        `${import.meta.env.VITE_BACKEND_URL}/deletepersonnelaccount/${user.id}`
      );

      if (response.status === 204) {
        alert("Votre compte a été supprimé avec succès."); // eslint-disable-line no-alert
        logout();
        navigate("/login");
      } else {
        alert("Vous ne pouvez pas supprimer ce compte."); // eslint-disable-line no-alert
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Vous n'êtes pas autorisé à effectuer cette action."); // eslint-disable-line no-alert
      } else {
        alert("Une erreur s'est produite lors de la suppression du compte."); // eslint-disable-line no-alert
      }
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
        Gérer mon compte
      </h3>

      <Form
        className="square border pt-3 ps-3 pe-3 mb-4 rounded"
        onSubmit={handleEmailChange}
      >
        <h3 className="fs-5 fw-bold pb-3">Changement d'adresse e-mail</h3>

        <MDBInput
          className="mb-4"
          type="email"
          id="oldEmail"
          required="required"
          label="Ancienne adresse email"
          value={oldEmail}
          onChange={(e) => setOldEmail(e.target.value)}
        />

        <MDBInput
          className="mb-4"
          type="email"
          id="newEmail"
          required="required"
          label="Nouvelle adresse email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <div className="d-grid gap-2 col-6 mx-auto">
          <MDBBtn type="submit" block className="mb-2">
            Valider
          </MDBBtn>
        </div>
      </Form>

      <Form
        className="square border pt-3 ps-3 pe-3 mb-4 rounded"
        onSubmit={handlePasswordChange}
      >
        <h3 className="fs-5 fw-bold pb-3">Changement de mot de passe</h3>
        <MDBInput
          className="mb-4"
          type="password"
          id="oldPassword"
          required="required"
          label="Ancien mot de passe"
          autoComplete="current-password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="newPassword"
          required="required"
          label="Nouveau mot de passe"
          autoComplete="current-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <div className="d-grid gap-2 col-6 mx-auto">
          <MDBBtn type="submit" block className="mb-2">
            Valider
          </MDBBtn>
        </div>
      </Form>

      <MDBBtn className="mt-4 mb-6" onClick={deletePersonalAccount}>
        Supprimer mon compte
      </MDBBtn>
    </MDBContainer>
  );
}

export default AccountManagement;
