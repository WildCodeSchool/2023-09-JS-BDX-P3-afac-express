import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { MDBAlert } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const appContext = createContext();
function AppContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("session")));
  const [basicDanger, setBasicDanger] = useState(false);
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const getUsers = () => JSON.parse(localStorage.getItem("users") ?? "[]");
  const navigate = useNavigate();

  const login = (credentials) => {
    const users = getUsers();

    const memoryUser = users.find(
      (userdb) =>
        userdb.email === credentials.email &&
        userdb.password === credentials.password
    );

    if (!memoryUser) {
      alert("Identifiants incorrects !"); // eslint-disable-line no-alert
      return false;
    }

    alert(`Content de vous revoir ${credentials.email}`); // eslint-disable-line no-alert
    setUser(memoryUser);
    localStorage.setItem("session", JSON.stringify(memoryUser));
    return true;
  };

  const register = (newUser) => {
    const users = getUsers();

    if (!users.find((userdb) => userdb.email === newUser.email)) {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert(`Bienvenue ${newUser.email}`); // eslint-disable-line no-alert
      navigate("/home");
    } else {
      alert("Vous êtes déjà inscrit !"); // eslint-disable-line no-alert
    }
  };

  const logout = () => {
    setUser(undefined);
    setOpenNavSecond(false);
    localStorage.removeItem("session");
  };

  const removeUser = () => {
    const currentUser = JSON.parse(localStorage.getItem("session"));

    if (currentUser) {
      const users = getUsers();

      const updatedUsers = users.filter(
        (userdb) => userdb.email !== currentUser.email
      );

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setUser(undefined);
      setOpenNavSecond(false);
      localStorage.removeItem("session");
      navigate("/home");
    }
  };

  const contextData = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
      user,
      setUser,
      login,
      logout,
      register,
      openNavSecond,
      setOpenNavSecond,
      removeUser,
    }),
    [
      isAdmin,
      setIsAdmin,
      user,
      setUser,
      login,
      logout,
      register,
      openNavSecond,
      setOpenNavSecond,
      removeUser,
    ]
  );

  return (
    <appContext.Provider value={contextData}>
      {children}
      <MDBAlert
        color="danger"
        autohide
        position="top-right"
        delay={2000}
        appendToBody
        open={basicDanger}
        onClose={() => setBasicDanger(false)}
      >
        Identifiants incorrects !
      </MDBAlert>
    </appContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AppContextProvider;

export const useApp = () => useContext(appContext);
