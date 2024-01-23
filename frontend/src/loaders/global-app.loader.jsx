const globalAppLoader = async (apiService) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      apiService.setToken(token);

      const [userData, artistData, artData] = await Promise.all([
        apiService.get(`${import.meta.env.VITE_BACKEND_URL}/users/personal`),
        apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artist`),
        apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artwork`),
      ]);

      return {
        preloadUser: userData ?? null,
        artistCollection: artistData.data,
        artCollection: artData.data,
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
    return null;
  }
};

export default globalAppLoader;
