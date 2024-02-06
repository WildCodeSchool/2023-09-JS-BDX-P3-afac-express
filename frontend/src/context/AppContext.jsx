import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { MDBAlert } from "mdb-react-ui-kit";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import ApiService from "../services/api.service";

const appContext = createContext();
function AppContextProvider({ children, apiService }) {
  const givenData = useLoaderData();
  const [isAdmin, setIsAdmin] = useState(givenData?.preloadUser?.is_admin);
  const [user, setUser] = useState(givenData?.preloadUser);
  const [basicDanger, setBasicDanger] = useState(false);
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const [artistCollection, setArtistCollection] = useState(
    givenData?.artistCollection || []
  );
  const [artCollection, setArtCollection] = useState(
    givenData?.artCollection || []
  );
  const [addedArtwork, setAddedArtwork] = useState([]);
  const [preloadUserForAdminData, setPreloadUserForAdminData] = useState(
    givenData?.preloadUserForAdmin || []
  );

  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const data = await apiService.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        credentials
      );

      localStorage.setItem("token", data.token);

      apiService.setToken(data.token);

      const result = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/users/personal`
      );

      setUser(result.data);
      setIsAdmin(result.data.is_admin === 1);

      return navigate(result.data.is_admin === 1 ? "/admin" : "/home");
    } catch (err) {
      throw new Error("Identifiants incorrects"); // eslint-disable-line no-alert
    }
  };

  const register = async (newUser) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users`,
        newUser
      );

      const newUserResponse = response.data;
      // console.log("User registered successfully. Data:", newUserResponse);

      setUser(newUserResponse);

      alert(`Bienvenue ${newUserResponse.email}`); // eslint-disable-line no-alert
      navigate("/login");
    } catch (err) {
      alert(err.message); // eslint-disable-line no-alert
    }
  };

  const logout = () => {
    setUser(undefined);
    setIsAdmin(false);
    setOpenNavSecond(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  const contextData = useMemo(
    () => ({
      addedArtwork,
      apiService,
      artCollection,
      artistCollection,
      isAdmin,
      login,
      logout,
      openNavSecond,
      register,
      setAddedArtwork,
      setArtCollection,
      setArtistCollection,
      setIsAdmin,
      setOpenNavSecond,
      setUser,
      user,
      preloadUserForAdminData,
      setPreloadUserForAdminData,
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
      artistCollection,
      setArtistCollection,
      artCollection,
      setArtCollection,
      apiService,
      addedArtwork,
      setAddedArtwork,
      preloadUserForAdminData,
      setPreloadUserForAdminData,
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
  apiService: PropTypes.instanceOf(ApiService).isRequired,
};

export default AppContextProvider;

export const useApp = () => useContext(appContext);
