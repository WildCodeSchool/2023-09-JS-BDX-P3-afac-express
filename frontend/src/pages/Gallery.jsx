import {
  MDBAnimation,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";
import Likes from "../components/Likes";
import { useApp } from "../context/AppContext";

function Gallery() {
  const { user, addedArtwork, artCollection } = useApp();

  return (
    <MDBContainer fluid className="pt-5">
      <h2
        className="fs-1 text text-center fw-bold pt-5 mb-6"
        style={{ color: "#7b273d" }}
      >
        Parcourez notre galerie d'art
      </h2>
      <MDBRow>
        {artCollection.map((artwork, index) => (
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
            <h3
              className="fs-4 fw-bold text-center text-truncate mt-3"
              style={{ color: "#7b273d" }}
            >
              {artwork.title}
            </h3>
            <h3 className=" fst-italic fs-5 text-center mt-3 pb-3">
              {artwork.artist_name}
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
                  Plus d'infos
                </Link>
              </MDBBtn>

              {user && (
                <Likes
                  artworkId={artwork.id}
                  artistId={artwork.artist_id}
                  userId={user.id}
                  artistName={artwork.artist_name}
                  artworkTitle={artwork.title}
                  artworkImage={artwork.image}
                  isLiked={
                    addedArtwork &&
                    addedArtwork.some((added) => added.artworkId === artwork.id)
                  }
                />
              )}
            </div>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
export default Gallery;
