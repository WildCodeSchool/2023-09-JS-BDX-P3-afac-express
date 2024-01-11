import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { useLoaderData } from "react-router-dom";
import Redirection from "../../components/Redirection";
import ApiService from "../../services/api.service";

const apiService = new ApiService();

export default function AdminArtManager() {
  const loaderdata = useLoaderData();
  const [postArtist, setPostArtist] = useState({
    name: "",
    description: "",
  });

  const handleInput = (e) => {
    setPostArtist({ ...postArtist, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiService.post(
        `http://localhost:5021/artist`,
        postArtist
      );
      console.warn(res);
    } catch (error) {
      console.error(error);
    }
  };

  const [postArt, setPostArt] = useState({
    title: "",
    image: "",
    dimension: "",
    creation_place: "",
  });

  const handleInputArt = (e) => {
    setPostArt({ ...postArt, [e.target.name]: e.target.value });
  };

  const handleSubmitArt = async (e) => {
    e.preventDefault();
    try {
      const res = await apiService.post(
        `http://localhost:5021/artwork`,
        postArt
      );
      console.warn(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Artistes</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        <h3>Ajouter un artiste</h3>
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
        <MDBBtn type="submit" className="mb-4" block>
          Valider
        </MDBBtn>
      </form>

      <MDBRow className="row-cols-1 row-cols-md-2 g-4">
        {loaderdata.artistCollection.map((artist) => (
          <MDBCol key={artist.name} xl={3} lg={4} className="mb-4">
            <MDBCard>
              <MDBCardImage src={artist.image} />
              <MDBCardBody>
                <MDBCardTitle>{artist.name}</MDBCardTitle>
                <MDBCardText>{artist.description}</MDBCardText>
                <MDBBtn href="#">Modifier</MDBBtn>
                <MDBBtn href="#">Supprimer</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>

      <h1>Oeuvres</h1>
      <h3>Ajouter une oeuvre</h3>
      <MDBInput
        className="mb-4"
        onChange={handleInputArt}
        type="artName"
        name="title"
        id="artName"
        label="Titre"
      />
      <MDBInput
        className="mb-4"
        onChange={handleInputArt}
        type="artistArt"
        name="artist_id"
        id="artistArt"
        label="Choix de l'artiste"
      />
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput
            id="Taille"
            onChange={handleInputArt}
            name="dimension"
            label="Taille ex : 100x200"
          />
        </MDBCol>
      </MDBRow>
      <MDBInput
        className="mb-4"
        onChange={handleInputArt}
        type="createlocation"
        name="creation_place"
        id="createLocation"
        label="Lieux de création"
      />
      <MDBInput
        className="mb-4"
        onChange={handleInputArt}
        type="createlocation"
        name="image"
        id="createLocation"
        label="image"
      />
      <MDBBtn type="submit" className="mb-4" block>
        Ajouter une image
      </MDBBtn>
      <MDBBtn type="submit" className="mb-4" onClick={handleSubmitArt} block>
        Valider
      </MDBBtn>
      <MDBRow>
        <MDBRow className="row-cols-1 row-cols-md-2 g-4">
          {loaderdata.artCollection.map((art) => (
            <MDBCol key={art.title} xl={3} lg={4} className="mb-4">
              <MDBCard>
                <MDBCardImage src={art.image} />
                <MDBCardBody>
                  <MDBCardTitle>{art.title}</MDBCardTitle>
                  <MDBCardText>{art.description}</MDBCardText>
                  <MDBBtn href="#">Modifier</MDBBtn>
                  <MDBBtn href="#">Supprimer</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBRow>

      <Redirection />
    </div>
  );
}
