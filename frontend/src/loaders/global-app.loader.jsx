const globalAppLoader = async (apiService) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      apiService.setToken(token);

      const [userData, artistData, artData, userAdminData] =
        await Promise.allSettled([
          apiService.get(`${import.meta.env.VITE_BACKEND_URL}/users/personal`),
          apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artist`),
          apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artwork`),
          apiService.get(`${import.meta.env.VITE_BACKEND_URL}/users`),
        ]);

      return {
        preloadUser:
          userData?.status === "fulfilled" ? userData.value.data : null,
        artistCollection:
          artistData?.status === "fulfilled" ? artistData.value.data : null,
        artCollection:
          artData?.status === "fulfilled" ? artData.value.data : null,
        preloadUserForAdmin:
          userAdminData?.status === "fulfilled"
            ? userAdminData.value.data
            : null,
      };
    }
    const [artistData, artData] = await Promise.all([
      apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artist`),
      apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artwork`),
    ]);
    return {
      artistCollection:
        artistData?.status === "fulfilled" ? artistData.value.data : null,
      artCollection:
        artData?.status === "fulfilled" ? artData.value.data : null,
    };
  } catch (err) {
    console.error("Loader Error:", err.message);
    console.error("Loader Error Stack:", err.stack);
    return null;
  }
};

export default globalAppLoader;
