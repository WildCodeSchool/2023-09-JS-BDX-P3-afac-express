import { MDBBtn } from "mdb-react-ui-kit";
import PropTypes from "prop-types";

import ApiService from "../services/api.service";
import { useApp } from "../context/AppContext";

const apiService = new ApiService();
function Likes({
  artworkId,
  artistId,
  userId,
  artistName,
  artworkTitle,
  artworkImage,
}) {
  const appContext = useApp();

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
      const postResponse = await apiService.post(
        `http://localhost:5021/artwork/user`,
        newFavorite
      );

      appContext.setAddedArtwork(postResponse);
    } catch (error) {
      console.error("Error during POST request:", error);
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
  userId: PropTypes.number.isRequired,
  artworkTitle: PropTypes.string.isRequired,
  artworkImage: PropTypes.string.isRequired,
  artistId: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default Likes;
