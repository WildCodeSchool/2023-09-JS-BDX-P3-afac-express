import { MDBBtn } from "mdb-react-ui-kit";
import PropTypes from "prop-types";
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
  const toggleLikes = async () => {
    const newFavorite = {
      artworkId,
      artistId,
      userId,
      artistName,
      artworkTitle,
      artworkImage,
    };

    // console.log("Nouveau favori à envoyer :", newFavorite);

    try {
      await apiService.post(`http://localhost:5021/artwork/user`, newFavorite);

      // Gérer le cas où l'ajout est réussi (éventuellement mettre à jour l'état local)
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
