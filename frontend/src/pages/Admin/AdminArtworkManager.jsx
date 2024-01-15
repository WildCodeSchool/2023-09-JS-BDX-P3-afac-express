import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import Redirection from "../../components/Redirection";
import ApiService from "../../services/api.service";

const apiService = new ApiService();

export default function AdminartworkManager() {
  const { id } = useParams();
  const [artwork, setartwork] = useState({
    artworkTitle: "Titre de l'oeuvre",
    size: "Taille",
  });

  const [updatedartworkTitle, setupdatedartworkTitle] = useState("");
  const [updatedSize, setupdatedSize] = useState("");
  const navigate = useNavigate();

  const updateartworkData = async () => {
    try {
      const updatedData = {
        artworkTitle:
          updatedartworkTitle !== ""
            ? updatedartworkTitle
            : artwork.artworkTitle,
        size: updatedSize !== "" ? updatedSize : artwork.size,
      };

      const { data } = await apiService.put(
        `http://localhost:5021/artwork/${id}`,
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
        `http://localhost:5021/artwork/${id}`
      );
      setartwork(data);
    };
    fetchartworkData();
  }, [id]);

  const deleteartworkData = async () => {
    try {
      const { data } = await apiService.delete(
        `http://localhost:5021/artwork/${id}`
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
      <form className="square border pt-3 ps-3 pe-3 mb-4 rounded">
        <h3 className="fs-5 fw-bold pb-3">Modifier le titre de l'oeuvre</h3>
        <p>{artwork.artworkTitle}</p>
        <MDBInput
          className="mb-4"
          type="nom"
          id="form1Example1"
          label="Modifier le nom"
          value={updatedartworkTitle}
          onChange={(e) => setupdatedartworkTitle(e.target.value)}
        />
        <MDBBtn
          type="submit"
          block
          className="mb-2"
          onClick={updateartworkData}
        >
          Valider
        </MDBBtn>
      </form>
      <form className="square border pt-3 ps-3 pe-3 mb-4 rounded">
        <h3 className="fs-5 fw-bold pb-3">Modifier la taille</h3>
        <p>{artwork.size}</p>
        <MDBInput
          className="mb-4"
          type="pseudo"
          id="form1Example1"
          label="Modifier le nom"
          value={updatedSize}
          onChange={(e) => setupdatedSize(e.target.value)}
        />
        <MDBBtn
          type="submit"
          block
          className="mb-2"
          onClick={updateartworkData}
        >
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
