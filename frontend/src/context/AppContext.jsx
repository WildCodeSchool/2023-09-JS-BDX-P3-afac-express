import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { MDBAlert } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const appContext = createContext();
function AppContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const tokenData = jwtDecode(token);
      return tokenData;
    }
    return null;
  });
  const [basicDanger, setBasicDanger] = useState(false);
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const getUsers = () => JSON.parse(localStorage.getItem("users") ?? "[]");
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const { data } = await axios.post(
        `http://localhost:5021/login`,
        credentials
      );
      localStorage.setItem("token", data.token);
      const tokenData = jwtDecode(data.token);
      alert(`Content de vous revoir ${credentials.email}`); // eslint-disable-line no-alert
      setUser(tokenData);
      if (tokenData.is_admin === 1) {
        navigate("/admin");
      }
      navigate("/home");
    } catch (err) {
      console.error(err);
      alert(err.message); // eslint-disable-line no-alert
    }
  };

  useEffect(() => {
    login();
  }, []);

  const register = async (newUser) => {
    try {
      const convertedUser = {
        ...newUser,
        is_admin: newUser.admin ? 1 : 0, // Convertir true en 1, false en 0
      };

      const response = await axios.post(
        "http://localhost:5021/users",
        convertedUser
      );
      const registeredUser = response.data;
      setUser(registeredUser);
      login({ email: newUser.email, password: newUser.password });
      alert(`Bienvenue ${newUser.email}`); // eslint-disable-line no-alert
      navigate("/home");
    } catch (err) {
      alert(err.message); // eslint-disable-line no-alert
    }
  };

  const logout = () => {
    setUser(undefined);
    setOpenNavSecond(false);
    localStorage.removeItem("token");
  };

  // A voir - todo
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
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;

export const useApp = () => useContext(appContext);
