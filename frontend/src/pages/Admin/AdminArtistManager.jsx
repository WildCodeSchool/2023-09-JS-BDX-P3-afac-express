import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import Redirection from "../../components/Redirection";
import ApiService from "../../services/api.service";

const apiService = new ApiService();

export default function AdminArtistManager() {
  const { id } = useParams();
  const [artist, setArtist] = useState({
    name: "Nom actuel",
    description: "Biographie actuelle",
    image: "URL_PAR_DEFAUT",
  });

  const [updatedName, setUpdatedName] = useState("");
  const [updateddescription, setUpdateddescription] = useState("");
  const navigate = useNavigate();

  const updateArtistData = async () => {
    try {
      const updatedData = {
        name: updatedName !== "" ? updatedName : artist.name,
        description:
          updateddescription !== "" ? updateddescription : artist.description,
      };

      const { data } = await apiService.put(
        `${import.meta.env.VITE_BACKEND_URL}/artist/${id}`,
        updatedData
      );
      setArtist(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchArtistData = async () => {
      const { data } = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/artist/${id}`
      );
      setArtist(data);
    };
    fetchArtistData();
  }, [id]);

  const deleteArtistData = async () => {
    try {
      const { data } = await apiService.delete(
        `${import.meta.env.VITE_BACKEND_URL}/artist/${id}`
      );
      setArtist(data);
      navigate("/admin/adminart");
    } catch (error) {
      console.error(error);
    }
  };

  const updateArtistImage = async (formData) => {
    try {
      const response = await apiService.patchImage(
        `${import.meta.env.VITE_BACKEND_URL}/uploads/artist/${id}`,
        formData
      );

      setArtist((prevArtist) => ({
        ...prevArtist,
        image: response?.data?.image || prevArtist.image,
      }));

      const { data } = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/artist/${id}`
      );

      setArtist(data);
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
        Gestion artiste
      </h3>
      <form
        className="square border pt-3 ps-3 pe-3 mb-4 rounded"
        onSubmit={updateArtistData}
      >
        <h3 className="fs-5 fw-bold pb-3">Modifier le nom de l'artiste</h3>
        <p>{artist.name}</p>
        <MDBInput
          className="mb-4"
          type="nom"
          id="form1Example1"
          label="Modifier le nom"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
      </form>
      <form
        className="square border pt-3 ps-3 pe-3 mb-4 rounded"
        onSubmit={updateArtistData}
      >
        <h3 className="fs-5 fw-bold pb-3">Modifier la biographie</h3>
        <p>{artist.description}</p>
        <MDBInput
          className="mb-4"
          type="pseudo"
          id="form1Example1"
          label="Modifier la biographie"
          value={updateddescription}
          onChange={(e) => setUpdateddescription(e.target.value)}
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

          updateArtistImage(formData);
        }}
      >
        <h3 className="fs-5 fw-bold pb-3">Modifier l'image</h3>
        <img
          src={artist?.image || "URL_PAR_DEFAUT"}
          className="d-block w-100"
          alt={artist?.name || "Nom par défaut"}
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

      <MDBBtn className="mt-4 mb-6" onClick={deleteArtistData}>
        Supprimer l'artiste
      </MDBBtn>

      <Redirection />
    </MDBContainer>
  );
}
