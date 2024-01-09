import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useApp } from "./AppContext";

const adminContext = createContext();

function AdminContextProvider({ children }) {
  const { user, isAdmin, setIsAdmin } = useApp();

  if (user.is_admin !== 1) {
    return <Navigate to="/admin" />;
  }

  const adminData = useMemo(
    () => ({ isAdmin, setIsAdmin }),
    [isAdmin, setIsAdmin]
  );

  // méthodes supplémentaires pour protéger des routes liées à l'administrateur

  return (
    <adminContext.Provider value={adminData}>{children}</adminContext.Provider>
  );
}

AdminContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminContextProvider;

export const useAdmin = () => useContext(adminContext);
