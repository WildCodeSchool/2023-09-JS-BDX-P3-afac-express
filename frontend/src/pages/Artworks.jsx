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
      image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
      description:
        "Lara Sousa est une cinéaste et artiste numérique mozambicaine. Elle est également conteuse. Le choix de sa profession n'est pas surprenant puisqu'elle est la descendante de la poétesse Noémia de Sousa. Née en 1926, Noémia de Sousa était poète et rédactrice en chef de journal ; jeune femme, elle a utilisé le contexte de répression politique comme stimulant pour écrire, dans lequel elle était farouchement critique, ce qui lui a valu d'être emprisonnée au Mozambique, puis de s'exiler. Aujourd'hui, on se souvient d'elle comme de l'un des plus importants poètes du Mozambique pour sa contribution à la lutte de libération du pays. Suivant les traces de sa grand-tante en matière d'expression artistique, Lara laisse sa marque avec son film Fin et sa pseudo-suite, Kalunga. Le visionnage des films est une expérience sensorielle et évocatrice, d'autant plus que les spectateurs se rendent compte qu'ils sont en train de dialoguer les uns avec les autres. Le travail de Lara s'engage dans des récits provenant d'un pays qui est encore en train d'accepter son identité passée et présente. Les questions liées à la décolonialité, au traumatisme, à l'hybridité, à la mort, à l'utopie et à la mer résonnent dans les histoires que Lara raconte. Consciente que les récits individuels ont été réduits au silence tout au long de l'histoire du Mozambique, Lara cherche à placer le sujet au centre de ses propres choix. En se concentrant sur les non-lieux où ces récits individuels existent, elle crée un espace imaginaire entre le passé, le présent et le futur où les désirs subjectifs peuvent émerger, comme un acte poétique pour ne pas laisser mourir les expériences subjectives.",
    },
    artworks: [
      {
        id: 1,
        image: "https://mdbootstrap.com/img/new/standard/city/041.webp",
        détails: "rien à afficher pour le moment",
      },
    ],
  },
];

function Artworks() {
  const [selectedArtist, setSelectedArtist] = useState([0]);

  const onSelectArtist = (artist) => {
    setSelectedArtist(artist);
  };
  return (
    <MDBContainer fluid className="pt-5">
      <h3
        className="fs-1 text text-center fw-bold pt-5 text-uppercase"
        style={{ color: "#7b273d" }}
      >
        Nos artistes
      </h3>

      <ArtworksFilter artworks={artworks} onSelectArtist={onSelectArtist} />
      {selectedArtist && (
        <div key={selectedArtist.id}>
          <h3 className="fs-4 text text-center pt-2">{selectedArtist.name}</h3>

          <MDBCard
            alignment="center"
            className="col-10 m-auto"
            shadow="5"
            key={selectedArtist.id}
          >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <div className="bg-image hover-zoom">
                <MDBCardImage
                  src={selectedArtist.image}
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
