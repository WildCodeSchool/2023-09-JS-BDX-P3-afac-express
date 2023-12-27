import {
  MDBAnimation,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState } from "react";

import Likes from "../components/Likes";
import FilterGallery from "../components/Filter/FilterGallery";
import { useLike } from "../context/LikeContext";

function Gallery() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const { artists } = useLike();
  const onSelectArtist = (artist) => {
    setSelectedArtist(artist);
  };

  return (
    <MDBContainer fluid className="pt-5">
      <h2
        className="fs-2 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Patrimoine iconographique de l’océan indien
      </h2>

      <FilterGallery artists={artists} onSelectArtist={onSelectArtist} />

      {selectedArtist && (
        <div key={selectedArtist.id}>
          <h3 className="fs-6 text text-start fw-bold">
            {selectedArtist.name}
          </h3>

          <MDBRow>
            {selectedArtist.artworks.map((artwork, index) => (
              <MDBCol
                lg="4"
                md="12"
                className="mb-4"
                key={artwork.id}
                itemId={index + 1}
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
                <h3 className=" fst-italic fs-6">{artwork.title}</h3>
                <div className="d-flex justify-content-center">
                  <MDBBtn
                    color="none"
                    className="m-1"
                    style={{ color: "#7b273d" }}
                    link
                    href="/Artworks"
                  >
                    <MDBIcon
                      fas
                      icon="exclamation-circle"
                      className="d-block p-2 size='4x'"
                    />
                  </MDBBtn>

                  <Likes
                    artworkId={artwork.id}
                    artworkTitle={artwork.title}
                    artworkImage={artwork.image}
                  />
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
