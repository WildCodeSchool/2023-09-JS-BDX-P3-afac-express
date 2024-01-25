import { MDBBtn } from "mdb-react-ui-kit";
import PropTypes from "prop-types";

import { useEffect, useState } from "react";
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
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesResponse = await apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/artwork/user/${userId}`
        );

        const favorites = favoritesResponse.data;

        if (Array.isArray(favorites)) {
          const isArtworkLiked = favorites.some(
            (favorite) => favorite.artworkId === artworkId
          );

          setIsLiked(isArtworkLiked);
        } else if (favorites && "artworkId" in favorites) {
          const isArtworkLiked = favorites.artworkId === artworkId;
          setIsLiked(isArtworkLiked);
        } else {
          console.error("Error fetching favorites: Unexpected response format");
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, [apiService, userId, artworkId]);

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
        `${import.meta.env.VITE_BACKEND_URL}/artwork/user`,
        newFavorite
      );

      const isAlreadyAdded = appContext.addedArtwork.some(
        (artwork) => artwork.artworkId === artworkId
      );

      if (!isAlreadyAdded) {
        appContext.setAddedArtwork((prevArtwork) => [
          ...prevArtwork,
          postResponse,
        ]);
      }

      setIsLiked(true);
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  return (
    <div>
      {!isLiked ? (
        <MDBBtn tag="a" className="m-1" onClick={toggleLikes}>
          Ajouter au favori
        </MDBBtn>
      ) : (
        <MDBBtn tag="a" className="m-1" disabled>
          Déjà ajouté au favori
        </MDBBtn>
      )}
    </div>
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
