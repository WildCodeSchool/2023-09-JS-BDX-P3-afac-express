import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { MDBAlert } from "mdb-react-ui-kit";
// import { useNavigate } from "react-router-dom";

const appContext = createContext();
function AppContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({ admin: false });
  const [basicDanger, setBasicDanger] = useState(false);
  const [openNavSecond, setOpenNavSecond] = useState(false);
  // const navigate = useNavigate();
  const getUsers = () => JSON.parse(localStorage.getItem("users") ?? "[]");

  const setLoggedInUser = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const login = (credentials) => {
    // setUser({ admin: true });
    const users = getUsers();

    const memoryUser = users.find(
      (userdb) =>
        userdb.email === credentials.email &&
        userdb.password === credentials.password
    );

    if (!memoryUser) {
      alert("Identifiants incorrects !"); // eslint-disable-line no-alert
    } else {
      alert(`Content de vous revoir ${credentials.email}`); // eslint-disable-line no-alert
      setUser(memoryUser);
      setLoggedInUser(memoryUser);
      // if (memoryUser.admin) {
      //   return navigate("/admin/demo");
      // }
    }
    // return navigate("/demo");
  };

  const register = (newUser) => {
    const users = getUsers();

    if (!users.find((userdb) => userdb.email === newUser.email)) {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert(`Bienvenue ${newUser.email}`); // eslint-disable-line no-alert
    } else {
      alert("Vous êtes déjà inscrit !"); // eslint-disable-line no-alert
    }
  };

  const logout = () => {
    // setUser({ admin: false });
    setUser(null); // ou setUser({})
    setOpenNavSecond(false);
  };

  const contextData = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
      user,
      login,
      logout,
      register,
      openNavSecond,
      setOpenNavSecond,
      setLoggedInUser,
    }),
    [
      isAdmin,
      setIsAdmin,
      user,
      login,
      logout,
      register,
      openNavSecond,
      setOpenNavSecond,
      setLoggedInUser,
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
