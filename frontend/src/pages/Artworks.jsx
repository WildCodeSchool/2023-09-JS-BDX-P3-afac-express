import { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { useApp } from "../context/AppContext";
import FilterArtworks from "../components/Filter/FilterArtworks";

function Artworks() {
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
    <MDBContainer fluid className="pt-5 pb-5">
      <h3
        className="fs-1 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Patrimoine iconographique de l'océan indien
      </h3>

      <FilterArtworks
        artists={artistCollection}
        onSelectArtist={onSelectArtist}
      />

      {selectedArtist && (
        <div key={selectedArtist.id}>
          <h3 className="fs-3 text text-center pt-2 fw-bold pb-2">
            {selectedArtist.name}
          </h3>

          <MDBCarousel showControls>
            {selectedArtist.artworks.map((artwork, index) => (
              <MDBCarouselItem key={artwork.id} itemID={index + 1}>
                <img
                  src={artwork.image}
                  className="d-block w-100"
                  alt={artwork.title}
                />
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle
                      className="fst-italic text-center fs-5"
                      style={{ color: "#7b273d" }}
                    >
                      {artwork.title}
                    </MDBCardTitle>
                    <MDBCardText className="text-center lh-sm">
                      {artwork.dimension && (
                        <span>
                          {artwork.dimension}
                          <br />
                        </span>
                      )}
                      {artwork.creation_place && (
                        <span>{artwork.creation_place}</span>
                      )}
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCarouselItem>
            ))}
          </MDBCarousel>
        </div>
      )}
    </MDBContainer>
  );
}

export default Artworks;
