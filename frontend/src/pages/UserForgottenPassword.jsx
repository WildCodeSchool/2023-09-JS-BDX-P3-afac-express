import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

export default function UserForgottenPassword() {
  return (
    <form className="user-form">
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
      <div className="text-center">
        <a href="/User">Retour</a>{" "}
      </div>
    </form>
  );
}
