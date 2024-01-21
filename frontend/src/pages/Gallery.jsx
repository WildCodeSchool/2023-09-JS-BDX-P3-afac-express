import {
  MDBAnimation,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { Link } from "react-router-dom";
import Likes from "../components/Likes";
import FilterGallery from "../components/Filter/FilterGallery";
import { useApp } from "../context/AppContext";

function Gallery() {
  const { user, artistCollection } = useApp();
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
        className="fs-1 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Patrimoine iconographique de l’océan indien
      </h2>

      <FilterGallery
        artists={artistCollection}
        onSelectArtist={onSelectArtist}
      />

      {selectedArtist && (
        <div key={selectedArtist.id}>
          <h3 className="fs-6 text text-start fw-bold mb-4 fs-4">
            {selectedArtist.name}
          </h3>

          <MDBRow>
            {selectedArtist.artworks.map((artwork, index) => (
              <MDBCol
                lg="4"
                md="12"
                className="mb-4"
                key={artwork.id}
                itemID={index + 1}
              >
                <MDBAnimation
                  reset
                  tag="img"
                  repeatOnScroll
                  start="onScroll"
                  animation="fade-in"
                  duration={500}
                  src={artwork.image}
                  className="img-fluid shadow-1-strong rounded"
                />
                <h3 className=" fst-italic fs-6 text-center mt-3">
                  {artwork.title}
                </h3>
                <div className="d-flex justify-content-center">
                  <MDBBtn tag="span" className="m-1 text-white">
                    <Link
                      to={{
                        pathname: `/artworks/${artwork.id}`,
                        state: {
                          artwork: {
                            id: artwork.id,
                            image: artwork.image,
                            title: artwork.title,
                            artistName: artwork.artist_name,
                            dimension: artwork.dimension,
                            creationPlace: artwork.creation_place,
                          },
                        },
                      }}
                      className="text-white"
                    >
                      Plus d'info
                    </Link>
                  </MDBBtn>

                  {selectedArtist && user && (
                    <Likes
                      artworkId={artwork.id}
                      artistId={selectedArtist.id}
                      userId={user.id}
                      artistName={selectedArtist.name}
                      artworkTitle={artwork.title}
                      artworkImage={artwork.image}
                    />
                  )}
                </div>
              </MDBCol>
            ))}
          </MDBRow>
        </div>
      )}
    </MDBContainer>
  );
}

export default Gallery;
