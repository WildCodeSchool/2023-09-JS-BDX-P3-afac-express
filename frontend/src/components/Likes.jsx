import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import { useLike } from "../context/LikeContext";

function Likes({ artworkId, artworkTitle, artworkImage }) {
  const { artists, favoriteArtworks, setFavoriteArtworks } = useLike();
  const isLiked = favoriteArtworks.some((artwork) => artwork.id === artworkId);

  const toggleLikes = () => {
    if (isLiked) {
      // Retirer l'artwork de la liste des favoris
      const updatedFavorites = favoriteArtworks.filter(
        (artwork) => artwork.id !== artworkId
      );
      setFavoriteArtworks(updatedFavorites);
    } else {
      // Récupérer l'artiste associé à l'œuvre
      const artist = artists.find(
        (
          artist // eslint-disable-line
        ) => artist.artworks.some((artwork) => artwork.id === artworkId) // eslint-disable-line
      );

      // Ajouter l'artwork à la liste des favoris avec le nom de l'artiste
      const newFavorite = {
        id: artworkId,
        title: artworkTitle,
        image: artworkImage,
        artistId: artist.id,
      };
      setFavoriteArtworks([...favoriteArtworks, newFavorite]);
      // Mettre à jour le local storage avec la nouvelle liste
      localStorage.setItem(
        "favorite_artworks",
        JSON.stringify([...favoriteArtworks, newFavorite])
      );
    }
  };

  const icon = !isLiked ? (
    <MDBIcon far icon="heart" className="d-block p-2" />
  ) : (
    <MDBIcon fas icon="heart" className="d-block p-2" />
  );

  return (
    <MDBBtn
      tag="a"
      color="none"
      className="m-1"
      style={{ color: "#7b273d" }}
      onClick={toggleLikes}
    >
      {icon}
    </MDBBtn>
  );
}
Likes.propTypes = {
  artworkId: PropTypes.number.isRequired,
  artworkTitle: PropTypes.string.isRequired,
  artworkImage: PropTypes.string.isRequired,
};

export default Likes;
