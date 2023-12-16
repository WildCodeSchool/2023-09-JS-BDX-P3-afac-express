import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";

function Likes() {
  const [isliked, setIsidLiked] = useState(false);
  const toggleLikes = () => {
    setIsidLiked((prevIsidLiked) => !prevIsidLiked);
  };

  const likes = isliked ? (
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
      {likes}
    </MDBBtn>
  );
}

export default Likes;
