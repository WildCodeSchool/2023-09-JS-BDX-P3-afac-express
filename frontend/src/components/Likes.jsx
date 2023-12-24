import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import { useLike } from "../context/LikeContext";

function Likes({ artwork }) {
  const { likes, likeArtwork } = useLike();
  const isLiked = likes[artwork.id];

  const likesIcon = isLiked ? (
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
      onClick={() => likeArtwork(artwork.id, artwork)}
    >
      {likesIcon}
    </MDBBtn>
  );
}

Likes.propTypes = {
  id: PropTypes.number.isRequired,
  artwork: PropTypes.string.isRequired,
};

export default Likes;
