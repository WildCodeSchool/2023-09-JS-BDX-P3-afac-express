import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link, useLocation } from "react-router-dom";
import Redirection from "../components/Redirection";

export default function ResetPassword() {
  const location = useLocation();
  const question = location.state?.question;
  const [answer, setAnswer] = useState("");
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
        id="form2Example2"
        required="required"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <MDBBtn type="submit" className="mb-4" block>
        <Link className="nav-link navLink" to="/login">
          Réinitialiser mon mot de passe
        </Link>
      </MDBBtn>
      <Redirection />
    </form>
  );
}
