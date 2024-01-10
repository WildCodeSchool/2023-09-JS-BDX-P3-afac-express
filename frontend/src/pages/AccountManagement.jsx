import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import { Form } from "react-router-dom";
import { useApp } from "../context/AppContext";
import ApiService from "../services/api.service";

const apiService = new ApiService();

function AccountManagement() {
  const { logout, removeUser } = useApp();
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleEmailChange = async () => {
    try {
      const response = await apiService.patch(
        `http://localhost:5021/change/email`,
        {
          oldEmail,
          newEmail,
        }
      );

      if (response.status === 204) {
        alert("L'adresse e-mail a été modifiée avec succès."); // eslint-disable-line no-alert
      } else {
        alert("Échec de la modification de l'adresse e-mail."); // eslint-disable-line no-alert
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePasswordChange = async () => {
    try {
      const response = await apiService.patch(
        `http://localhost:5021/change/password`,
        {
          oldPassword,
          newPassword,
        }
      );

      if (response.status === 204) {
        alert("Le mot de passe a été modifiée avec succès."); // eslint-disable-line no-alert
      } else {
        alert("Échec de la modification du mot de passe."); // eslint-disable-line no-alert
      }
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

        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
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
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="newPassword"
          required="required"
          label="Nouveau mot de passe"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
      </Form>

      <MDBBtn className="mt-4 mb-6" onClick={logout}>
        Déconnexion
      </MDBBtn>

      <MDBBtn className="mt-4 mb-6" onClick={() => removeUser()}>
        Supprimer son compte
      </MDBBtn>
    </MDBContainer>
  );
}

export default AccountManagement;
