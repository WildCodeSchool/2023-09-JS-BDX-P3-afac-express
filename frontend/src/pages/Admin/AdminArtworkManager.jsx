import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import Redirection from "../../components/Redirection";
import ApiService from "../../services/api.service";
import FilterArtistAdmin from "../../components/Filter/FilterArtistAdmin";
import { useApp } from "../../context/AppContext";

const apiService = new ApiService();

export default function AdminartworkManager() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState({
    title: "Titre de l'œuvre",
    dimension: "Dimension de l'œuvre",
    creation_place: "Lieu de création de l'œuvre",
    image: "URL_PAR_DEFAUT",
    artist_id: null,
  });

  const [selectedArtist, setSelectedArtist] = useState(null);
  const [updatedTitle, setupdatedTitle] = useState("");
  const [updatedDimension, setupdatedDimension] = useState("");
  const [updatedCreationPlace, setUpdatedCreationPlace] = useState("");
  const [updatedArtistId, setUpdatedArtistId] = useState("");
  const { setArtCollection } = useApp();

  const navigate = useNavigate();

  const updateartworkData = async () => {
    try {
      const updatedData = {
        title: updatedTitle !== "" ? updatedTitle : artwork.title,
        dimension:
          updatedDimension !== "" ? updatedDimension : artwork.dimension,
        creation_place:
          updatedCreationPlace !== ""
            ? updatedCreationPlace
            : artwork.creation_place,
        artist_id: updatedArtistId !== "" ? updatedArtistId : artwork.artist_id,
      };

      const { data } = await apiService.put(
        `${import.meta.env.VITE_BACKEND_URL}/artwork/${id}`,
        updatedData
      );
      setArtwork(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchartworkData = async () => {
      const { data } = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/artwork/${id}`
      );

      setArtwork(data);
      setSelectedArtist(data.artist_id);
    };
    fetchartworkData();
  }, [id]);

  const deleteArtworkData = async () => {
    try {
      const { data } = await apiService.delete(
        `${import.meta.env.VITE_BACKEND_URL}/artwork/${id}`
      );

      setArtCollection(data);
      navigate("/admin/adminart");
    } catch (error) {
      console.error(error);
    }
  };

  const updateArtworkImage = async (formData) => {
    try {
      const response = await apiService.patchImage(
        `${import.meta.env.VITE_BACKEND_URL}/uploads/artwork/${id}`,
        formData
      );

      setArtwork((prevArtwork) => ({
        ...prevArtwork,
        image: response?.data?.image || prevArtwork.image,
      }));

      const { data } = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/artwork/${id}`
      );

      setArtwork(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MDBContainer
      fluid
      className="pt-5 d-flex justify-content-center flex-column"
    >
      <h3
        className=" d-flex justify-content-center fs-1 text text-center fw-bold pt-5 text-uppercase mb-5"
        style={{ color: "#7b273d" }}
      >
        Gestion des œuvres
      </h3>
      <form
        className="square border pt-3 ps-3 pe-3 mb-4 rounded"
        onSubmit={updateartworkData}
      >
        <h3 className="fs-5 fw-bold pb-3">Modifier le titre de l'œuvre</h3>
        <p>{artwork.title}</p>
        <MDBInput
          className="mb-4"
          type="nom"
          id="form1Example1"
          label="Modifier le titre"
          value={updatedTitle}
          onChange={(e) => setupdatedTitle(e.target.value)}
        />
        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
      </form>
      <form
        className="square border pt-3 ps-3 pe-3 mb-4 rounded"
        onSubmit={updateartworkData}
      >
        <h3 className="fs-5 fw-bold pb-3">Modifier la dimension</h3>
        {artwork.dimension ? (
          <p>{artwork.dimension}</p>
        ) : (
          <p>Pas de dimension (Pour modifier, ex : 100 x 100).</p>
        )}
        <MDBInput
          className="mb-4"
          type="pseudo"
          id="form1Example1"
          label="Modifier la dimension"
          value={updatedDimension}
          onChange={(e) => setupdatedDimension(e.target.value)}
        />
        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
      </form>
      <form
        className="square border pt-3 ps-3 pe-3 mb-4 rounded"
        onSubmit={updateartworkData}
      >
        <h3 className="fs-5 fw-bold pb-3">Modifier le lieux de création</h3>
        {artwork.creation_place ? (
          <p>{artwork.creation_place}</p>
        ) : (
          <p>Pas de lieu de création.</p>
        )}
        <MDBInput
          className="mb-4"
          type="pseudo"
          id="form1Example1"
          label="Modifier le lieu de création"
          value={updatedCreationPlace}
          onChange={(e) => setUpdatedCreationPlace(e.target.value)}
        />
        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
      </form>

      <form
        className="square border pt-3 ps-3 pe-3 mb-4 rounded"
        onSubmit={updateartworkData}
      >
        <h3 className="fs-5 fw-bold pb-3">Modifier le nom de l'artiste</h3>

        {artwork.artist_name !== null ? (
          <p>{artwork.artist_name}</p>
        ) : (
          <p>Pas d'artiste.</p>
        )}

        <FilterArtistAdmin
          name="artist_id"
          onChange={(e) => setUpdatedArtistId(e.target.value)}
          selectedArtist={selectedArtist}
        />

        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
      </form>

      <form
        className="square border pt-3 ps-3 pe-3 mb-4 rounded"
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("avatar", e.target.elements.avatar.files[0]);

          updateArtworkImage(formData);
        }}
      >
        <h3 className="fs-5 fw-bold pb-3">Modifier l'image</h3>
        <img
          src={artwork?.image || "URL_PAR_DEFAUT"}
          className="d-block w-100"
          alt={artwork?.name || "Nom par défaut"}
        />

        <input
          type="file"
          accept="image/*"
          className="d-flex flex-column mb-4"
          name="avatar"
        />
        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
      </form>

      <MDBBtn className="mt-4 mb-6" onClick={deleteArtworkData}>
        Supprimer l'œuvre
      </MDBBtn>

      <Redirection />
    </MDBContainer>
  );
}
