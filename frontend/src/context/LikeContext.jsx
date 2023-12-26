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

  const contextValue = useMemo(() => ({ likes, setLikes }), [likes]);

  return (
    <likeContext.Provider value={contextValue}>{children}</likeContext.Provider>
  );
}

LikeContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LikeContext;

export const useLike = () => useContext(likeContext);
