const globalAppLoader = async (apiService) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      apiService.setToken(token);

      const [userData, artistData, artData, userAdminData] = await Promise.all([
        apiService.get(`${import.meta.env.VITE_BACKEND_URL}/users/personal`),
        apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artist`),
        apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artwork`),
        apiService.get(`${import.meta.env.VITE_BACKEND_URL}/users`),
      ]);

      return {
        preloadUser: userData ?? null,
        artistCollection: artistData.data,
        artCollection: artData.data,
        preloadUserForAdmin: userAdminData.data,
      };
    }
    const [artistData, artData] = await Promise.all([
      apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artist`),
      apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artwork`),
    ]);
    return {
      artistCollection: artistData.data,
      artCollection: artData.data,
    };
  } catch (err) {
    console.error("Loader Error:", err.message);
    console.error("Loader Error Stack:", err.stack);
    return null;
  }
};

export default globalAppLoader;
