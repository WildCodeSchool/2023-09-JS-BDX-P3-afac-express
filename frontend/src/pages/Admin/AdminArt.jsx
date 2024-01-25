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
import { useNavigate } from "react-router-dom";
import Redirection from "../../components/Redirection";
import ApiService from "../../services/api.service";
import { useApp } from "../../context/AppContext";

const apiService = new ApiService();

export default function AdminArt() {
  const navigate = useNavigate();
  const { artistCollection, artCollection, setArtist, setArt } = useApp();
  const [postArtist, setPostArtist] = useState({ name: "", description: "" });

  const handleInput = (e) => {
    setPostArtist({ ...postArtist, [e.target.name]: e.target.value });
  };

  const [image, setImage] = useState("");

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
    const formData = new FormData();
    formData.append("avatar", image);
    const result = await apiService.post(
      `http://localhost:5021/uploads`,
      formData
    );
    setArtist(result);
  };

  const [postArt, setPostArt] = useState({
    title: "",
    dimension: "",
    creation_place: "",
    artist_id: "",
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
    const formData = new FormData();
    formData.append("avatar", image);
    const result = await apiService.post(
      `http://localhost:5021/uploads`,
      formData
    );
    setArt(result);
  };

  return (
    <div>
      {/* Artist Section */}
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
        <form className="d-flex flex-column mb-4" onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </form>
        <MDBBtn type="submit" className="mb-4" block>
          Valider
        </MDBBtn>
      </form>

      <MDBRow className="row-cols-1 row-cols-md-2 g-4">
        {artistCollection && artistCollection.length > 0 ? (
          artistCollection.map((artist) => (
            <MDBCol key={artist.id} xl={3} lg={4} className="mb-4">
              <MDBCard>
                <MDBCardImage src={artist.image} />
                <MDBCardBody>
                  <MDBCardTitle>{artist.name}</MDBCardTitle>
                  <MDBCardText className="text-truncate">
                    {artist.description}
                  </MDBCardText>
                  <MDBBtn
                    onClick={() =>
                      navigate(`/admin/adminartistmanager/${artist.id}`)
                    }
                  >
                    Modifier ou supprimer
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))
        ) : (
          <p>Aucun artiste disponible.</p>
        )}
      </MDBRow>

      {/* Artwork Section */}
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
      <form className="d-flex flex-column mb-4" onSubmit={handleSubmitArt}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </form>
      <MDBBtn type="submit" className="mb-4" onClick={handleSubmitArt} block>
        Valider
      </MDBBtn>

      <MDBRow className="row-cols-1 row-cols-md-2 g-4">
        {artCollection && artCollection.length > 0 ? (
          artCollection.map((art) => (
            <MDBCol key={art.id} xl={3} lg={4} className="mb-4">
              <MDBCard>
                <MDBCardImage src={art.image} />
                <MDBCardBody>
                  <MDBCardTitle className="text-truncate">
                    {art.title}
                  </MDBCardTitle>
                  <MDBCardText className="text-truncate">
                    {art.dimension} {art.creation_place}
                  </MDBCardText>
                  <MDBBtn
                    onClick={() =>
                      navigate(`/admin/adminartworkmanager/${art.id}`)
                    }
                  >
                    Modifier ou supprimer
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))
        ) : (
          <p>Aucune œuvre disponible.</p>
        )}
      </MDBRow>

      <Redirection />
    </div>
  );
}
