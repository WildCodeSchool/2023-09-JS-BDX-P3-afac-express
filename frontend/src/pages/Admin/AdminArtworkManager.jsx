import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import Redirection from "../../components/Redirection";
import ApiService from "../../services/api.service";

const apiService = new ApiService();

export default function AdminartworkManager() {
  const { id } = useParams();
  const [artwork, setartwork] = useState({
    title: "Titre de l'oeuvre",
    dimension: "Dimension de l'oeuvre",
    creation_place: "Lieu de création de l'oeuvre",
    image: "URL_PAR_DEFAUT",
  });

  const [updatedTitle, setupdatedTitle] = useState("");
  const [updatedDimension, setupdatedDimension] = useState("");
  const [updatedCreationPlace, setupdatedCreationPlace] = useState("");

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
      };

      const { data } = await apiService.put(
        `${import.meta.env.VITE_BACKEND_URL}/artwork/${id}`,
        updatedData
      );
      setartwork(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchartworkData = async () => {
      const { data } = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/artwork/${id}`
      );
      setartwork(data);
    };
    fetchartworkData();
  }, [id]);

  const deleteartworkData = async () => {
    try {
      const { data } = await apiService.delete(
        `${import.meta.env.VITE_BACKEND_URL}/artwork/${id}`
      );
      setartwork(data);
      navigate("/admin/adminartwork");
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
        Gestion des Oeuvres
      </h3>
      <form
        className="square border pt-3 ps-3 pe-3 mb-4 rounded"
        onSubmit={updateartworkData}
      >
        <h3 className="fs-5 fw-bold pb-3">Modifier le titre de l'oeuvre</h3>
        <p>{artwork.title}</p>
        <MDBInput
          className="mb-4"
          type="nom"
          id="form1Example1"
          label="Modifier le nom"
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
        <h3 className="fs-5 fw-bold pb-3">Modifier la taille</h3>
        {artwork.dimension ? (
          <p>{artwork.dimension}</p>
        ) : (
          <p>Pas de dimension (Pour modifier, ex : 100 x 100).</p>
        )}
        <MDBInput
          className="mb-4"
          type="pseudo"
          id="form1Example1"
          label="Modifier le nom"
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
          label="Modifier le nom"
          value={setupdatedCreationPlace}
          onChange={(e) => setupdatedCreationPlace(e.target.value)}
        />
        <MDBBtn type="submit" block className="mb-2">
          Valider
        </MDBBtn>
      </form>

      <MDBBtn className="mt-4 mb-6" onClick={deleteartworkData}>
        Supprimer l'oeuvre
      </MDBBtn>

      <Redirection />
    </MDBContainer>
  );
}
