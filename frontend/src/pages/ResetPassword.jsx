import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate, useLocation } from "react-router-dom";
import Redirection from "../components/Redirection";
import ApiService from "../services/api.service"; // Assurez-vous d'importer le bon chemin

const apiService = new ApiService();

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const question = location.state?.question;
  const [answer, setAnswer] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      password.length < 4 ||
      confirmPassword.length < 4 ||
      answer.trim() === ""
    ) {
      setError("Le mot de passe doit contenir au minimum 4 caractères.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    if (answer.trim() === "") {
      setError("Veuillez fournir une réponse à la question secrète.");
      return;
    }
    setError("");

    try {
      // Envoyer une demande de réinitialisation côté serveur
      await apiService.post(
        `${import.meta.env.VITE_BACKEND_URL}/reset/password`,
        {
          email: location.state?.email, // Utilisez l'email de l'utilisateur enregistré
          answer,
          newPassword: password,
          confirmPassword,
        }
      );

      // Si la réinitialisation réussit, redirigez vers la page de connexion

      navigate("/login", {
        state: { successMessage: "Mot de passe réinitialisé avec succès." },
      });
    } catch (err) {
      // Gérer les erreurs liées à la réinitialisation du mot de passe
      setError(
        `Une erreur s'est produite lors de la réinitialisation du mot de passe`
      );
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h1>Changement du mot de passe</h1>
      <h3>Nouveau mot de passe</h3>
      <MDBInput
        className="mb-4"
        type="password"
        id="form2Example1"
        required="required"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h3>Confirmez le nouveau mot de passe</h3>
      <MDBInput
        className="mb-4"
        type="password"
        id="form2Example2"
        required="required"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <h3>{question}</h3>
      <MDBInput
        className="mb-4"
        type="text"
        id="form2Example3"
        required="required"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <MDBBtn type="submit" className="mb-4" block>
        Réinitialiser mon mot de passe
      </MDBBtn>
      <Redirection />
    </form>
  );
}
