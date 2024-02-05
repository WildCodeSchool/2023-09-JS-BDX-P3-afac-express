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
import FilterArtistAdmin from "../../components/Filter/FilterArtistAdmin";

const apiService = new ApiService();

export default function AdminArt() {
  const navigate = useNavigate();
  const {
    artistCollection,
    artCollection,
    setArtCollection,
    setArtistCollection,
  } = useApp();
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

      const formData = new FormData();
      formData.append("avatar", image);
      formData.append("artist", res.id);
      const response = await apiService.post(
        `http://localhost:5021/uploads/artist`,
        formData
      );

      const newArtist = {
        id: res.id,
        name: res.name,
        description: res.description,
        image: response.image,
      };

      setArtistCollection([...artistCollection, newArtist]);
      // setPostArtist({ name: "", description: "" });
      // setImage("");
    } catch (error) {
      console.error(error);
    }
  };

  const [postArt, setPostArt] = useState({
    title: "",
    dimension: "",
    creation_place: "",
    artist_id: "",
  });

  const handleInputArt = async (e) => {
    setPostArt({ ...postArt, [e.target.name]: e.target.value });
  };

  const handleSubmitArt = async (e) => {
    e.preventDefault();
    try {
      const res = await apiService.post(
        `http://localhost:5021/artwork`,
        postArt
      );

      const formData = new FormData();
      formData.append("avatar", image);
      formData.append("artwork", res.id);
      const response = await apiService.post(
        `http://localhost:5021/uploads/artwork`,
        formData
      );
      const newArtwork = {
        id: res.id,
        title: res.title,
        dimension: res.dimension,
        creation_place: res.creation_place,
        artist_id: res.artist_id,
        artist_name: res.artist_name,
        image: response.image,
      };

      setArtCollection([...artCollection, newArtwork]);
      // setPostArt({
      //   title: "",
      //   dimension: "",
      //   creation_place: "",
      //   artist_id: "",
      // });
      // setImage("");
    } catch (error) {
      console.error(error);
    }
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

        <input
          type="file"
          accept="image/*"
          className="d-flex flex-column mb-4"
          onChange={(e) => setImage(e.target.files[0])}
        />

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

      <form className="user-form" onSubmit={handleSubmitArt}>
        <h1>œuvres</h1>
        <h3>Ajouter une œuvre</h3>
        <MDBInput
          className="mb-4"
          onChange={handleInputArt}
          type="artName"
          name="title"
          id="artName"
          label="Titre"
        />

        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput
              id="Dimension"
              onChange={handleInputArt}
              name="dimension"
              label="Dimension ex : 100x200"
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

        <MDBRow className="mb-4 text-start">
          <FilterArtistAdmin name="artist_id" onChange={handleInputArt} />
        </MDBRow>

        <input
          className="d-flex flex-column mb-4"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <MDBBtn type="submit" className="mb-4" block>
          Valider
        </MDBBtn>
      </form>

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
                    {art.artist_name}
                  </MDBCardText>
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
