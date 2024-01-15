import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import Redirection from "../../components/Redirection";
import ApiService from "../../services/api.service";

const apiService = new ApiService();

export default function AdminArtistManager() {
  const { id } = useParams();
  const [artist, setartist] = useState({
    artistName: "Nom actuel",
    biography: "Biographie actuelle",
  });

  const [updatedartistName, setUpdatedartistName] = useState("");
  const [updatedbiography, setUpdatedbiography] = useState("");
  const navigate = useNavigate();

  const updateartistData = async () => {
    try {
      const updatedData = {
        artistName:
          updatedartistName !== "" ? updatedartistName : artist.artistName,
        biography:
          updatedbiography !== "" ? updatedbiography : artist.biography,
      };

      const { data } = await apiService.put(
        `http://localhost:5021/artist/${id}`,
        updatedData
      );
      setartist(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchartistData = async () => {
      const { data } = await apiService.get(
        `http://localhost:5021/artist/${id}`
      );
      setartist(data);
    };
    fetchartistData();
  }, [id]);

  const deleteartistData = async () => {
    try {
      const { data } = await apiService.delete(
        `http://localhost:5021/artist/${id}`
      );
      setartist(data);
      navigate("/admin/adminart");
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
      <form className="square border pt-3 ps-3 pe-3 mb-4 rounded">
        <h3 className="fs-5 fw-bold pb-3">Modifier le nom de l'artiste</h3>
        <p>{artist.artistName}</p>
        <MDBInput
          className="mb-4"
          type="nom"
          id="form1Example1"
          label="Modifier le nom"
          value={updatedartistName}
          onChange={(e) => setUpdatedartistName(e.target.value)}
        />
        <MDBBtn type="submit" block className="mb-2" onClick={updateartistData}>
          Valider
        </MDBBtn>
      </form>
      <form className="square border pt-3 ps-3 pe-3 mb-4 rounded">
        <h3 className="fs-5 fw-bold pb-3">Modifier la biographie</h3>
        <p>{artist.biography}</p>
        <MDBInput
          className="mb-4"
          type="pseudo"
          id="form1Example1"
          label="Modifier le nom"
          value={updatedbiography}
          onChange={(e) => setUpdatedbiography(e.target.value)}
        />
        <MDBBtn type="submit" block className="mb-2" onClick={updateartistData}>
          Valider
        </MDBBtn>
      </form>

      <MDBBtn className="mt-4 mb-6" onClick={deleteartistData}>
        Supprimer le compte
      </MDBBtn>

      <Redirection />
    </MDBContainer>
  );
}
