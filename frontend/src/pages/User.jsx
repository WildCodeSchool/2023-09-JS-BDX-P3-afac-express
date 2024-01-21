import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBLightbox,
  MDBLightboxItem,
  MDBRow,

  //   MDBRow,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
// import { useLike } from "../context/LikeContext";
// import Likes from "../components/Likes";
// import FilterUser from "../components/Filter/FilterUser";
import { useApp } from "../context/AppContext";
import ApiService from "../services/api.service";

const apiService = new ApiService();

function User() {
  const { user, addedArtwork } = useApp();
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    if (!user) {
      console.error("user not defined");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await apiService.get(
          `http://localhost:5021/artwork/user/${user.userId}`
        );

        const existingArtworks =
          JSON.parse(localStorage.getItem("artworks")) || [];
        const updatedArtworks = [
          ...existingArtworks,
          ...response.data,
          addedArtwork,
        ];

        localStorage.setItem("artworks", JSON.stringify(updatedArtworks));
        setArtworks(updatedArtworks);
      } catch (error) {
        console.error("Error during GET request:", error);
      }
    };

    fetchData();
  }, [user, addedArtwork]);

  return (
    <MDBContainer fluid className="pt-5">
      <h2
        className="fs-2 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Patrimoine iconographique de l’océan indien
      </h2>
      <div>
        <div className="d-flex flex-column mb-3">
          <div className="p-2">
            <MDBLightbox>
              <MDBRow>
                {artworks.map((artwork) => (
                  <MDBCol lg="4" key={artwork?.artworkId}>
                    {artwork && artwork.artworkImage ? (
                      <MDBLightboxItem
                        src={artwork.artworkImage}
                        fullscreenSrc={artwork.artworkImage}
                        className="w-100"
                      />
                    ) : null}

                    {artwork && artwork.artworkTitle && (
                      <MDBCard>
                        <MDBCardBody className="d-flex justify-content-center">
                          <div className="d-inline p-2">
                            <h2 className="fs-5 me-5 text-center fw-bold">
                              {artwork.artworkTitle}
                            </h2>
                            {artwork.artistName && (
                              <h3 className="fs-6 fst-italic text text-center pt-2 pb-2">
                                {artwork.artistName}
                              </h3>
                            )}
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    )}
                  </MDBCol>
                ))}
              </MDBRow>
            </MDBLightbox>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}
export default User;
