import { MDBBtn } from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ApiService from "../services/api.service";

const apiService = new ApiService();
function Likes({
  artworkId,
  artistId,
  userId,
  artistName,
  artworkTitle,
  artworkImage,
}) {
  const navigate = useNavigate();

  const toggleLikes = async () => {
    const newFavorite = {
      artworkId,
      artistId,
      userId,
      artistName,
      artworkTitle,
      artworkImage,
    };

    try {
      await apiService.post(`http://localhost:5021/artwork/user`, newFavorite);
      navigate("/user");
      // Gérer le cas où l'ajout est réussi (l'envoie à la page perso ?)
    } catch (error) {
      console.error("Erreur lors de la requête POST :", error);
    }
  };

  return (
    <MDBBtn tag="a" className="m-1" onClick={toggleLikes}>
      Ajouter au favori
    </MDBBtn>
  );
}
Likes.propTypes = {
  artworkId: PropTypes.number.isRequired,
  artworkTitle: PropTypes.string.isRequired,
  artworkImage: PropTypes.string.isRequired,
  artistId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default Likes;
