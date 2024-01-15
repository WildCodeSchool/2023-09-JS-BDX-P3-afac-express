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
// import { useLike } from "../context/LikeContext";
// import Likes from "../components/Likes";
import FilterUser from "../components/Filter/FilterUser";
import { useApp } from "../context/AppContext";

function User() {
  const { artistCollection } = useApp();
  const [selectedArtist, setSelectedArtist] = useState(null);

  const onSelectArtist = (artist, artCollection) => {
    const artistWithArtworks = {
      ...artist,
      artworks: artCollection.filter(
        (artwork) => artwork.artist_id === artist.id
      ),
    };
    setSelectedArtist(artistWithArtworks);
  };

  return (
    <MDBContainer fluid className="pt-5">
      <h2
        className="fs-2 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Patrimoine iconographique de l’océan indien
      </h2>

      <FilterUser artists={artistCollection} onSelectArtist={onSelectArtist} />

      {selectedArtist && (
        <div key={selectedArtist.id}>
          <h2 className="fs-5 text text-center pt-2 pb-2">
            {selectedArtist.name}
          </h2>

          <div className="d-flex flex-column mb-3">
            <div className="p-2">
              <MDBLightbox>
                <MDBRow>
                  {selectedArtist.artworks.map((artwork) => (
                    <MDBCol lg="4" key={artwork.id}>
                      <MDBLightboxItem
                        src={artwork.image}
                        fullscreenSrc={artwork.image}
                        className="w-100"
                      />
                      <MDBCard>
                        <MDBCardBody className="d-flex justify-content-center">
                          <div className="d-inline p-2">
                            <MDBCardTitle tag="strong" className="fs-5 me-5">
                              {artwork.title}
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
      )}
    </MDBContainer>
  );
}
export default User;
