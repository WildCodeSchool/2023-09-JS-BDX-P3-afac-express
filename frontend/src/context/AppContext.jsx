import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { MDBAlert } from "mdb-react-ui-kit";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import ApiService from "../services/api.service";

const appContext = createContext();
function AppContextProvider({ children, apiService }) {
  const givenData = useLoaderData();
  const [isAdmin, setIsAdmin] = useState(
    givenData?.preloadUser?.data?.is_admin
  );
  const [user, setUser] = useState(givenData?.preloadUser?.data);
  const [basicDanger, setBasicDanger] = useState(false);
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const getUsers = () => JSON.parse(localStorage.getItem("users") ?? "[]");
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const data = await apiService.post(
        `http://localhost:5021/login`,
        credentials
      );
      localStorage.setItem("token", data.token);

      apiService.setToken(data.token);

      const result = await apiService.get(
        "http://localhost:5021/users/personal"
      );

      alert(`Content de vous revoir ${result.data.email}`); // eslint-disable-line no-alert
      setUser(result.data);

      if (result.data.is_admin === 1) {
        navigate("/admin");
      }
      return navigate("/home");
    } catch (err) {
      console.error(err);
      alert(err.message); // eslint-disable-line no-alert
    }

    return null;
  };

  const register = async (newUser) => {
    try {
      setUser(await axios.post("http://localhost:5021/users", newUser));
      alert(`Bienvenue ${newUser.email}`); // eslint-disable-line no-alert
    } catch (err) {
      alert(err.message); // eslint-disable-line no-alert
      navigate("/home");
    }
  };

  const logout = () => {
    setUser(undefined);
    setOpenNavSecond(false);
    localStorage.removeItem("token");
    navigate("/home");
  };

  // TODO: A voir - supprimer
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
      apiService,
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
      apiService,
    ]
  );

  // useEffect(() => {
  //   if (isAdmin) {
  //     return navigate("/admin");
  //   }

  //   return null;
  // }, []);

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
  apiService: PropTypes.instanceOf(ApiService).isRequired,
};

export default AppContextProvider;

export const useApp = () => useContext(appContext);
