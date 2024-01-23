import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBLightbox,
  MDBLightboxItem,
  MDBRow,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import ApiService from "../services/api.service";

const apiService = new ApiService();

function User() {
  const { user, addedArtwork } = useApp();
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user || !user.id) {
          console.error("user or user.userId not defined");
          return;
        }

        const response = await apiService.get(
          `http://localhost:5021/artwork/user/${user.id}`
        );

        setArtworks(response.data);
      } catch (error) {
        console.error("Error during GET request:", error);
      }
    };

    fetchData();
  }, [user, addedArtwork]);

  const handleDelete = async (artworkId) => {
    try {
      await apiService.delete(
        `http://localhost:5021/artwork/user/${user.id}/${artworkId}`
      );

      const updatedArtworks = artworks.filter(
        (artwork) => artwork.artworkId !== artworkId
      );

      setArtworks(updatedArtworks);
    } catch (error) {
      console.error("Error deleting artwork:", error);
    }
  };

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
            {user && user.id ? (
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
                              <h2 className="d-flex justify-content-center fs-5 fw-bold">
                                {artwork.artworkTitle}
                              </h2>
                              <h3 className="fs-6 fst-italic text text-center pt-2 pb-2">
                                {artwork.artistName}
                              </h3>

                              <MDBBtn
                                tag="a"
                                className="m-1"
                                onClick={() => handleDelete(artwork.artworkId)}
                              >
                                Supprimer des favoris
                              </MDBBtn>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      )}
                    </MDBCol>
                  ))}
                </MDBRow>
              </MDBLightbox>
            ) : (
              <p>Chargement des données...</p>
            )}
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}
export default User;
