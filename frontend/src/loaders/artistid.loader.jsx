const artistIdLoader = async (apiService, params) => {
  try {
    const { data } = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/artwork/${params.id}`
    );
    return { artworkData: data };
  } catch (err) {
    return null;
  }
};

export default artistIdLoader;
