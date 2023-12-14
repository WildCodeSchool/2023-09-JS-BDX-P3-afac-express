import React from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";

export default function UserCreateAccount() {
  return (
    <form>
      <h1>Créer un compte</h1>
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput id="form3Example1" label="Prénom" />
        </MDBCol>
        <MDBCol>
          <MDBInput id="form3Example2" label="Nom" />
        </MDBCol>
      </MDBRow>
      <MDBInput
        className="mb-4"
        type="email"
        id="form3Example3"
        label="Adresse Mail"
      />
      <MDBInput
        className="mb-4"
        type="password"
        id="form3Example4"
        label="Mot de passe"
      />
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput id="birthDate" label="Jour" />
        </MDBCol>
        <MDBCol>
          <MDBInput id="birthMonth" label="Mois" />
        </MDBCol>
        <MDBCol>
          <MDBInput id="birthYear" label="Année" />
        </MDBCol>
      </MDBRow>
      <MDBBtn type="submit" className="mb-4" block>
        Suivant
      </MDBBtn>

      <div className="text-center">
        <a href="/User">Retour</a>
      </div>
    </form>
  );
}
