import { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import { useApp } from "../context/AppContext";
import FilterArtworks from "../components/Filter/FilterArtworks";

function Artworks() {
  const { artistCollection, artCollection } = useApp();
  const [selectedArtist, setSelectedArtist] = useState(null);
  const { id } = useParams();

  const onSelectArtist = (artist, artworks) => {
    const artistWithArtworks = {
      ...artist,
      artworks: artworks.filter((art) => art.artist_id === artist.id),
    };
    setSelectedArtist(artistWithArtworks);
  };

  useEffect(() => {
    // console.log("id:", id, typeof id);
    // console.log("artCollection:", artCollection);
    if (id) {
      const selectedArtwork = artCollection.find(
        (artwork) => artwork.id === parseInt(id, 10)
      );
      // console.log("selectedArtwork:", selectedArtwork);
      if (selectedArtwork) {
        const selectedArtists = artistCollection.find(
          (artist) => artist.id === selectedArtwork.artist_id
        );
        // console.log("selectedArtists:", selectedArtists);
        if (selectedArtists) {
          onSelectArtist(selectedArtists, [selectedArtwork]);
        }
      }
    } else {
      setSelectedArtist(null);
    }
  }, [id, artistCollection, artCollection]);
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

          <MDBCarousel showControls interval={10000}>
            {selectedArtist.artworks.map((art, index) => (
              <MDBCarouselItem key={art.id} id={index + 1}>
                <img
                  src={art.image}
                  className="d-block w-100"
                  alt={art.title}
                />
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle
                      className="fst-italic text-center fs-5"
                      style={{ color: "#7b273d" }}
                    >
                      {art.title}
                    </MDBCardTitle>
                    <MDBCardText className="text-center lh-sm">
                      {art.dimension && (
                        <span>
                          {art.dimension}
                          <br />
                        </span>
                      )}
                      {art.creation_place && <span>{art.creation_place}</span>}
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
