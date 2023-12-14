import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

export default function UserForgottenPassword() {
  return (
    <form className="user-form">
      <MDBInput
        className="mb-4"
        type="email"
        id="form1Example1"
        label="Email address"
      />
      {/* <MDBRow className="mb-4"></MDBRow> */}

      <MDBBtn type="submit" block>
        Sign in
      </MDBBtn>
    </form>
  );
}
