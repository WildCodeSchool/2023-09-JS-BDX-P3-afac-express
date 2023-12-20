import React from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";

export default function AdminArtManager() {
  return (
    <form className="user-form">
      <h1>Ajout artistes et oeuvres</h1>
      <h3>Créateur</h3>
      <MDBInput
        className="mb-4"
        type="email"
        id="form2Example1"
        label="Artiste"
      />
      <MDBInput
        className="mb-4"
        type="password"
        id="form2Example2"
        label="Biographie"
      />
      <MDBBtn type="submit" className="mb-4" block>
        Télécharger une image
      </MDBBtn>
      <h3>Oeuvres</h3>
      <MDBInput className="mb-4" type="artName" id="artName" label="Titre" />
      <MDBInput
        className="mb-4"
        type="artistArt"
        id="artistArt"
        label="Si existant choix de l'artiste"
      />
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput id="height" label="Largeur" />
        </MDBCol>
        <MDBCol>
          <MDBInput id="width" label="Longueur" />
        </MDBCol>
      </MDBRow>
      <MDBInput
        className="mb-4"
        type="password"
        id="createLocation"
        label="Lieux de création"
      />
      <MDBBtn type="submit" className="mb-4" block>
        Télécharger une image
      </MDBBtn>
      <MDBBtn type="submit" className="mb-4" block>
        Suivant
      </MDBBtn>

      <div className="text-center">
        <a href="/User">Retour</a>
      </div>
    </form>
  );
}
