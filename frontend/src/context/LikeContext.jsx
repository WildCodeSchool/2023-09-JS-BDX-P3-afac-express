import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useApp } from "./AppContext";

const likeContext = createContext();

function LikeContext({ children }) {
  const [user, setUser] = useState(false);
  const [likes, setLikes] = useState(() => {
    const storedLikes = localStorage.getItem("likes");
    return storedLikes ? JSON.parse(storedLikes) : {};
  });
  const { login, logout } = useApp();

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const toggleLike = (artworkId) => {
    setLikes((prevLikes) => {
      const newLikes = { ...prevLikes, [artworkId]: !prevLikes[artworkId] };
      return newLikes;
    });
  };

  const userData = useMemo(
    () => ({ user, setUser, login, logout, likes, toggleLike }),
    [user, setUser, login, logout, likes, toggleLike]
  );

  return (
    <likeContext.Provider value={userData}>{children}</likeContext.Provider>
  );
}

LikeContext.propTypes = {
  children: PropTypes.string.isRequired,
};
export default LikeContext;

export const useLike = () => useContext(likeContext);
