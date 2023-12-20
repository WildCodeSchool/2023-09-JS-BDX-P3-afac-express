import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Redirection from "../components/Redirection";

export default function UserForgottenPassword() {
  return (
    <form className="user-form">
      <h1>Mot de passe oublié ?</h1>
      <MDBInput
        className="mb-4"
        type="email"
        id="form1Example1"
        label="Adresse Mail"
      />
      {/* <MDBRow className="mb-4"></MDBRow> */}

      <MDBBtn type="submit" block>
        Suivant
      </MDBBtn>
      <Redirection />
    </form>
  );
}
