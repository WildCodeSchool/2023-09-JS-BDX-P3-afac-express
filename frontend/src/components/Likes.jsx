import { MDBBtn } from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import axios from "axios";
import { useApp } from "../context/AppContext";

function Likes({
  artworkId,
  artworkTitle,
  artworkImage,
  artistId,
  artistName,
}) {
  const { user } = useApp();

  const toggleLikes = async () => {
    const newFavorite = {
      id: artworkId,
      title: artworkTitle,
      image: artworkImage,
      artist_id: artistId,
      artist_name: artistName,
    };

    // console.log("Nouveau favori à envoyer :", newFavorite);

    try {
      // console.log("Avant la requête POST. Nouveau favori :", newFavorite);

      await axios.post(`/artwork/user/${user.id}`, newFavorite);
      // console.log("Requête POST réussie. Nouveau favori ajouté :", newFavorite);

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
  artistName: PropTypes.string.isRequired,
};

export default Likes;
