import { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBContainer,
} from "mdb-react-ui-kit";

import ArtworksFilter from "../components/ArtworksFilter";

const artworks = [
  {
    artist: {
      id: 1,
      name: "Lara Sousa",

      artworks: [
        {
          id: 1,
          image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          details: "rien à afficher pour le moment",
        },
        {
          id: 2,
          image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          details: "rien à afficher pour le moment",
        },
        {
          id: 3,
          image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          details: "rien à afficher pour le moment",
        },
      ],
    },
  },
  {
    artist: {
      id: 2,
      name: "Deepa Bauhadoor",

      artworks: [
        {
          id: 1,
          image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          details: "rien à afficher pour le moment",
        },
        {
          id: 2,
          image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          details: "rien à afficher pour le moment",
        },
        {
          id: 3,
          image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          details: "rien à afficher pour le moment",
        },
      ],
    },
  },
  {
    artist: {
      id: 3,
      name: "Mahefa Dimbiniaina Randrianarivelo",

      artworks: [
        {
          id: 1,
          image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          details: "rien à afficher pour le moment",
        },
        {
          id: 2,
          image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          details: "rien à afficher pour le moment",
        },
        {
          id: 3,
          image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          details: "rien à afficher pour le moment",
        },
      ],
    },
  },
  {
    artist: {
      id: 4,
      name: "Mathilde Neri",

      artworks: [
        {
          id: 1,
          image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          details: "rien à afficher pour le moment",
        },
        {
          id: 2,
          image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          details: "rien à afficher pour le moment",
        },
        {
          id: 3,
          image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          details: "rien à afficher pour le moment",
        },
      ],
    },
  },
];

function Artworks() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedArtworks, setSelectedArtworks] = useState([]);

  const onSelectArtist = (artist) => {
    setSelectedArtist(artist);
    setSelectedArtworks(artist.artworks || []);
  };
  return (
    <MDBContainer fluid className="pt-5">
      <h3
        className="fs-1 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Patrimoine iconographique de l'océan indien
      </h3>

      <ArtworksFilter artworks={artworks} onSelectArtist={onSelectArtist} />
      {selectedArtist && (
        <div key={selectedArtist.id}>
          <h3 className="fs-4 text text-center pt-2">{selectedArtist.name}</h3>

          {selectedArtworks.map((artwork) => (
            <MDBCard
              alignment="center"
              className="col-10 m-auto"
              shadow="5"
              key={artwork.id}
            >
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <div className="bg-image hover-zoom">
                  <MDBCardImage
                    src={artwork.image}
                    fluid
                    alt={selectedArtist.name}
                    class="rounded img-fluid"
                  />
                </div>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardText className="p-5 text-start">
                  {selectedArtist.description}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          ))}
        </div>
      )}
    </MDBContainer>
  );
}

export default Artworks;

/* <MDBRow>
            <MDBCol lg="4" md="12" className="mb-4">
              <MDBAnimation
                reset
                tag="img"
                repeatOnScroll
                start="onScroll"
                animation="fade-in"
                duration={500}
                src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                className="img-fluid shadow-1-strong rounded"
              />
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-4">
              <MDBAnimation
                reset
                tag="img"
                repeatOnScroll
                start="onScroll"
                animation="fade-in"
                duration={500}
                delay={300}
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                className="img-fluid shadow-1-strong rounded"
              />
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-4">
              <MDBAnimation
                reset
                tag="img"
                repeatOnScroll
                start="onScroll"
                animation="fade-in"
                duration={500}
                delay={500}
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                className="img-fluid shadow-1-strong rounded"
              />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-4">
              <MDBAnimation
                reset
                tag="img"
                repeatOnScroll
                start="onScroll"
                animation="fade-in"
                duration={500}
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                className="img-fluid shadow-1-strong rounded"
              />
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-4">
              <MDBAnimation
                reset
                tag="img"
                repeatOnScroll
                start="onScroll"
                animation="fade-in"
                duration={500}
                delay={300}
                src="https://mdbootstrap.com/img/new/standard/city/045.webp"
                className="img-fluid shadow-1-strong rounded"
              />
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-4">
              <MDBAnimation
                reset
                tag="img"
                repeatOnScroll
                start="onScroll"
                animation="fade-in"
                duration={500}
                delay={500}
                src="https://mdbootstrap.com/img/new/standard/city/046.webp"
                className="img-fluid shadow-1-strong rounded"
              />
            </MDBCol>
          </MDBRow> */
