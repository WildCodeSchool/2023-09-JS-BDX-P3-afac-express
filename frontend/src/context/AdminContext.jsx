import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useApp } from "./AppContext";

const adminContext = createContext();

function AdminContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const appContext = useApp();

  if (appContext.user.admin === false) {
    return <Navigate to="/login" />;
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
  children: PropTypes.string.isRequired,
};

export default AdminContextProvider;

export const useAdmin = () => useContext(adminContext);
