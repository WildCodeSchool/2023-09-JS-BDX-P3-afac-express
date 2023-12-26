import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import { useLike } from "../context/LikeContext";
// import { useState } from "react";

function Likes({ artworkId }) {
  const { likes, setLikes } = useLike();
  const isLiked = likes[artworkId] || false;

  const toggleLikes = () => {
    const newLikes = { ...likes, [artworkId]: !isLiked };
    setLikes(newLikes);
  };

  const likeIcon = isLiked ? (
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
      {likeIcon}
    </MDBBtn>
  );
}

Likes.propTypes = {
  artworkId: PropTypes.string.isRequired,
  artwork: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default Likes;
