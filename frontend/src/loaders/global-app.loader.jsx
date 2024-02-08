const globalAppLoader = async (apiService) => {
  const token = localStorage.getItem("token");
  const loaderData = {
    artistCollection: null,
    artCollection: null,
    preloadUser: null,
    preloadUserForAdmin: null,
  };

  try {
    if (token) {
      apiService.setToken(token);

      const [userData, artistData, artData, userAdminData] =
        await Promise.allSettled([
          apiService.get(`${import.meta.env.VITE_BACKEND_URL}/users/personal`),
          apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artist`),
          apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artwork`),
          apiService.get(`${import.meta.env.VITE_BACKEND_URL}/users`),
        ]);

      loaderData.preloadUser =
        userData?.status === "fulfilled" ? userData.value.data : null;
      loaderData.artistCollection =
        artistData?.status === "fulfilled" ? artistData.value.data : null;
      loaderData.artCollection =
        artData?.status === "fulfilled" ? artData.value.data : null;
      loaderData.preloadUserForAdmin =
        userAdminData?.status === "fulfilled" ? userAdminData.value.data : null;
    } else {
      localStorage.clear();
      const [artistData, artData] = await Promise.allSettled([
        apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artist`),
        apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artwork`),
      ]);
      loaderData.artistCollection =
        artistData?.status === "fulfilled" ? artistData.value.data : null;
      loaderData.artCollection =
        artData?.status === "fulfilled" ? artData.value.data : null;
    }
  } catch (err) {
    console.error("Loader Error:", err.message);
    console.error("Loader Error Stack:", err.stack);
  }

  return loaderData;
};

export default globalAppLoader;
