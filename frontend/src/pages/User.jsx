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
import { useState } from "react";
import { useLike } from "../context/LikeContext";
import Likes from "../components/Likes";
import FilterUser from "../components/Filter/FilterUser";

function User() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const { artists, favoriteArtworks } = useLike();

  const onSelectArtist = (artist) => {
    setSelectedArtist(artist);
  };

  const getFavoriteArtworkById = (artworkId) => {
    return favoriteArtworks.find(
      (artwork) =>
        artwork.id === artworkId && artwork.artistId === selectedArtist.id
    );
  };

  return (
    <MDBContainer fluid className="pt-5">
      <h2
        className="fs-2 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Patrimoine iconographique de l’océan indien
      </h2>

      <FilterUser artists={artists} onSelectArtist={onSelectArtist} />

      {selectedArtist && (
        <div key={selectedArtist.id}>
          <h2 className="fs-5 text text-center pt-2 pb-2">
            {selectedArtist.name}
          </h2>

          <div className="d-flex flex-column mb-3">
            <div className="p-2">
              <MDBLightbox>
                <MDBRow>
                  <MDBCol lg="4">
                    <MDBLightboxItem
                      src={
                        getFavoriteArtworkById(selectedArtist.artworks[0].id)
                          ?.image || selectedArtist.artworks[0].image
                      }
                      fullscreenSrc={
                        getFavoriteArtworkById(selectedArtist.artworks[0].id)
                          ?.image || selectedArtist.artworks[0].image
                      }
                      className="w-100"
                    />
                    <MDBCard>
                      <MDBCardBody className="d-flex justify-content-center">
                        <div className="d-inline p-2">
                          <MDBCardTitle tag="strong" className="fs-5 me-5">
                            {getFavoriteArtworkById(
                              selectedArtist.artworks[0].id
                            )?.title || selectedArtist.artworks[0].title}
                          </MDBCardTitle>
                          <div className="d-inline">
                            <Likes />
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  {/* <MDBCol lg="4">
                    <MDBLightboxItem
                      src={
                        getFavoriteArtworkById(selectedArtist.artworks[0].id)
                          ?.image || selectedArtist.artworks[0].image
                      }
                      fullscreenSrc={
                        getFavoriteArtworkById(selectedArtist.artworks[0].id)
                          ?.image || selectedArtist.artworks[0].image
                      }
                      className="w-100"
                    />
                    <MDBCard>
                      <MDBCardBody className="d-flex justify-content-center">
                        <div className="d-inline p-2">
                          <MDBCardTitle tag="strong" className="fs-5 me-5">
                            {getFavoriteArtworkById(
                              selectedArtist.artworks[0].id
                            )?.title || selectedArtist.artworks[0].title}
                          </MDBCardTitle>
                          <div className="d-inline">
                            <Likes />
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol> */}
                </MDBRow>
              </MDBLightbox>
            </div>
          </div>
        </div>
      )}
    </MDBContainer>
  );
}
export default User;
