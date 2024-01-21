import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  //   MDBAnimation,
  MDBCol,
  MDBContainer,
  //   MDBCol,
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

        localStorage.setItem(
          "artworks",
          JSON.stringify(response.data, addedArtwork)
        );
        setArtworks([...response.data, addedArtwork]);
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
        <h2 className="fs-5 text text-center pt-2 pb-2">nom artiste</h2>

        <div className="d-flex flex-column mb-3">
          <div className="p-2">
            <MDBLightbox>
              <MDBRow>
                {artworks.map((artwork) => (
                  <MDBCol lg="4" key={artwork.artworkId}>
                    <MDBLightboxItem
                      src={artwork.artworkImage}
                      fullscreenSrc={artwork.artworkImage}
                      className="w-100"
                    />
                    <MDBCard>
                      <MDBCardBody className="d-flex justify-content-center">
                        <div className="d-inline p-2">
                          <MDBCardTitle tag="strong" className="fs-5 me-5">
                            {artwork.artworkTitle}
                          </MDBCardTitle>
                          <div className="d-inline">
                            {/* <Likes
                              artworkId={selectedArtist.artworks[0].id}
                              artworkTitle={selectedArtist.artworks[0].title}
                              artworkImage={selectedArtist.artworks[0].image}
                            /> */}
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
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
