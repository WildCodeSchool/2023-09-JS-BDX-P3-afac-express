import React from "react";
import { MDBInput, MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Redirection from "../components/Redirection";

export default function UserForgottenPassword() {
  return (
    <MDBContainer fluid className="mt-5">
      <form className="user-form mt-6 mb-6">
        <h1 className="mb-5">Mot de passe oublié ?</h1>
        <MDBInput
          className="mb-7"
          type="email"
          id="form1Example1"
          label="Adresse Mail"
        />

        <MDBBtn type="submit" block className="mb-3 mt-10">
          Suivant
        </MDBBtn>
        <Redirection />
      </form>
    </MDBContainer>
  );
}
