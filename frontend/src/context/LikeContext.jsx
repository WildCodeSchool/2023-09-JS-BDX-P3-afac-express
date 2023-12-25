import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const likeContext = createContext();

function LikeContext({ children }) {
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem("likes_info")) || {}
  );

  useEffect(() => {
    localStorage.setItem("likes_info", JSON.stringify(likes));
  }, [likes]);

  const likeArtwork = (id, title, image) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: {
        id,
        image,
        title,
      },
    }));
  };

  const userData = useMemo(() => ({ likes, likeArtwork }), [likes]);

  return (
    <likeContext.Provider value={userData}>{children}</likeContext.Provider>
  );
}

LikeContext.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default LikeContext;

export const useLike = () => useContext(likeContext);
