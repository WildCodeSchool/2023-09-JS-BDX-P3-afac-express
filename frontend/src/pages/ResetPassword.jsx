import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Redirection from "../components/Redirection";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 4 || confirmPassword.length < 4) {
      setError("Le mot de passe doit contenir au minimum 4 caractères.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setError("");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h1>Changement du mot de passe</h1>
      <h3>Nouveau mot de passe</h3>
      <MDBInput
        className="mb-4"
        type="password"
        id="form2Example1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h3>Confirmez le nouveau mot de passe</h3>
      <MDBInput
        className="mb-4"
        type="password"
        id="form2Example2"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <MDBBtn type="submit" className="mb-4" block>
        Réinitialiser mon mot de passe
      </MDBBtn>
      <Redirection />
    </form>
  );
}
