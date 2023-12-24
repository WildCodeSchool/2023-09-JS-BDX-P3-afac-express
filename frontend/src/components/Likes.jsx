import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import { useLike } from "../context/LikeContext";

function Likes({ artworkId }) {
  const { likes, toggleLike } = useLike();
  const isLiked = likes[artworkId];

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
      onClick={() => toggleLike(artworkId)}
    >
      {likesIcon}
    </MDBBtn>
  );
}

Likes.propTypes = {
  artworkId: PropTypes.number.isRequired,
};

export default Likes;
