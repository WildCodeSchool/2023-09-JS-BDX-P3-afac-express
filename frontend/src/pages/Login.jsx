import React from "react";
import "../style/Login.scss";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";

function Login() {
  return (
    <form className="user-form">
      <h1>Connexion</h1>
      <MDBInput
        className="mb-4"
        type="email"
        id="form2Example1"
        label="Adresse mail"
      />
      <MDBInput
        className="mb-4"
        type="password"
        id="form2Example2"
        label="Mot de passe"
      />

      <MDBRow className="mb-4">
        <MDBCol className="d-flex justify-content-center">
          <MDBCheckbox
            id="form2Example3"
            label="Se souvenir de moi"
            defaultChecked
          />
        </MDBCol>
        <MDBCol>
          <a href="/UserForgottenPassword">Mot de passe oublié ?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type="submit" className="mb-4" block>
        Se connecter
      </MDBBtn>

      <div className="text-center">
        <p>
          Pas encore membre ? <a href="/UserCreateAccount">Enregistrez-vous</a>
        </p>
      </div>
    </form>
  );
}

export default Login;
