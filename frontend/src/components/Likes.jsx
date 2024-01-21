import { MDBBtn } from "mdb-react-ui-kit";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
import ApiService from "../services/api.service";
import { useApp } from "../context/AppContext";

const apiService = new ApiService();
function Likes({
  artworkId,
  artistId,
  artistName,
  artworkTitle,
  artworkImage,
}) {
  // const navigate = useNavigate();
  const { user } = useApp();

  const toggleLikes = async () => {
    const newFavorite = {
      artworkId,
      artistId,
      userId: user.id,
      artistName,
      artworkTitle,
      artworkImage,
    };

    try {
      console.info("Data to be sent in POST request:", newFavorite);
      await apiService.post(`http://localhost:5021/artwork/user`, newFavorite);
      console.info("POST request successful");

      console.info("POST request successful");

      const response = await apiService.get(
        `http://localhost:5021/artwork/${artworkId}`,
        {
          params: newFavorite,
        }
      );
      console.info("GET request successful", response.data);
      // navigate("/user");
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
