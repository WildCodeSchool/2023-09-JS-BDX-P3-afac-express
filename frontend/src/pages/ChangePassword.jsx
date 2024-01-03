import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

export default function ChangePassword() {
  return (
    <form className="user-form">
      <h1>Changement du mot de passe</h1>
      <h3>Nouveau mot de passe</h3>
      <MDBInput className="mb-4" type="password" id="form2Example1" />
      <h3>Confirmez le nouveau mot de passe</h3>
      <MDBInput className="mb-4" type="password" id="form2Example2" />

      <MDBBtn type="submit" className="mb-4" block>
        Réinitialiser mon mot de passe
      </MDBBtn>
    </form>
  );
}
