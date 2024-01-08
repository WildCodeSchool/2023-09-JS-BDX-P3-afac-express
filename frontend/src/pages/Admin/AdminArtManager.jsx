import React, { useState } from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import Redirection from "../../components/Redirection";

export default function AdminArtManager() {
  const [post, setPost] = useState({
    name: "",
    description: "",
  });
  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5021/artist`, post)
      .then((res) => console.warn(res))
      .catch((err) => console.error(err));
  };

  return (
    <form className="user-form">
      <h1>Ajout artistes et oeuvres</h1>
      <h3>Créateur</h3>
      <MDBInput
        className="mb-4"
        onChange={handleInput}
        name="name"
        type="text"
        label="Artiste"
      />
      <MDBInput
        className="mb-4"
        onChange={handleInput}
        name="description"
        type="text"
        label="Biographie"
      />
      <MDBBtn type="submit" className="mb-4" block>
        Ajouter une image
      </MDBBtn>
      <MDBBtn type="submit" className="mb-4" onClick={handleSubmit} block>
        Valider
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
        Ajouter une image
      </MDBBtn>
      <MDBBtn type="submit" className="mb-4" block>
        Valider
      </MDBBtn>

      <Redirection />
    </form>
  );
}
