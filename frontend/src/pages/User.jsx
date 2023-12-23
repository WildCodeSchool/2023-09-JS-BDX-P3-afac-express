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
import Likes from "../components/Likes";
import Filter from "../components/Filter/FilterUser";

const artists = [
  {
    id: 1,
    name: "Lara Sousa",
    image: "https://i.postimg.cc/13kZ1Z6f/1-Lara-Sousa.jpg",
    description:
      "Lara Sousa est une cinéaste et artiste numérique mozambicaine...",
    artworks: [
      {
        title:
          "Tirem nos tudo mas deixem nos a música... Quando eu nasci era meio dia e o sol brillava ...",
        image:
          "https://i.postimg.cc/tCL5xcpm/1-Tirem-Nos-Tudo-Mas-Deixem-Nosamusica-Quandoeu-Nasci-Era-Meio-Diaeo-Sol-Brillava-regressaremos-Sombrias-Corpo.jpg",
        dimention: "-",
        creation_place: "-",
      },
      {
        title: "Sementes e imagens",
        image: "https://i.postimg.cc/1XMYcrRY/2-Sementes-EImagens.jpg",
        dimention: "-",
        creation_place: "-",
      },
    ],
  },
  {
    id: 2,
    name: "Deepa Bauhadoor",
    image: "https://i.postimg.cc/rp7G9QB6/2-Deepa-Bauhadoor.jpg",
    description:
      "Née à Maurice en 1976, elle passe toute son enfance à Petite Julie dans la maison familiale et au milieu des champs de canne alentours. ...", // (la description complète ici)
    artworks: [
      {
        title: "Brède chouchou",
        image: "https://i.postimg.cc/W3fxBPJw/6-Brede-Chouchou.jpg",
        dimention: "1200 x 1600",
        creation_place: "Maurice",
      },
      {
        title: "Brède rave",
        image: "https://i.postimg.cc/7Z94KdXm/7-Brede-Rave.jpg",
        dimention: "1200 x 1600",
        creation_place: "Maurice",
      },
    ],
  },
  {
    id: 3,
    name: "Mahefa Dimbiniaina Randrianarivelo",
    image:
      "https://i.postimg.cc/5tWNqzs7/3-Mahefa-Dimbiniaina-Randrianarivelo.jpg",
    description:
      "Mahefa Dimbiniaina Randrianarivelo, né à Antananarivo en 1991, est un photographe surréaliste Malagasy. Commençant par le graphic design et le digital painting, il choisit d'approfondir la photographie pour s'exprimer. Inspiré par les grands noms du surréalisme : René Magritte, Claude Cahun, Man Ray, plus récemment, Erik Johansson ou Grégory Crewdson, sa principale source d'inspiration reste le cinéaste Wes Anderson. En 2022, il est le lauréat du prix Paritana, prix d'art contemporain malagasy et effectue ainsi une résidence de création d'une durée de trois mois à la Cité Internationale des Arts à Paris.",

    artworks: [
      {
        title: "Analakely, Antananarivo",
        image: "https://i.postimg.cc/W1YN2xrt/11-Analakely-Antananarivo.jpg",
        dimention: "4613 x 4613",
        creation_place: "Madagascar",
      },
      {
        title: "Ancienne banque de Madagascar et des Comores, Toamasina",
        image:
          "https://i.postimg.cc/mgJvp4C3/12-Ancienne-Banque-De-Madagascar-Et-Des-Comores-Toamasina.jpg",
        dimention: "-",
        creation_place: "Madagascar",
      },
    ],
  },
  {
    id: 4,
    name: "Mathilde Neri",
    image: "https://i.postimg.cc/nzcx0GBk/4-Mathilde-Neri.jpg",
    description:
      "Née en 1982 à Noyon (France), Mathilde Neri est une artiste visuelle du monde hybride et outsider qui œuvre également dans le champ de la performance. Neri explore les dimensions de réalité qui émanent de la rencontre avec le signe dans la nature, avec lequel elle entre en connexion par le médium. Elle vit et travaille à La Réunion.",
    artworks: [
      {
        title: "Il ne reste plus que...",
        image: "https://i.postimg.cc/0rgSHb5R/16-Il-Ne-Reste-Plus-Que.jpg",
        dimention: "-",
        creation_place: "Réunion",
      },
      {
        title: "... réalité fantomatique",
        image: "https://i.postimg.cc/7LLNzJfm/17-Realite-Fantomatique.jpg",
        dimention: "-",
        creation_place: "Réunion",
      },
    ],
  },
];

function User() {
  const [selectedArtist, setSelectedArtist] = useState(null);

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

      <Filter artists={artists} onSelectArtist={onSelectArtist} />

      {selectedArtist && (
        <div key={selectedArtist.id}>
          <div className="d-flex flex-column mb-3">
            <div className="p-2">
              <MDBLightbox>
                <MDBRow>
                  <MDBCol lg="4">
                    <MDBLightboxItem
                      src={selectedArtist.artworks[0].image}
                      fullscreenSrc={selectedArtist.artworks[0].image}
                      className="w-100"
                    />
                    <MDBCard>
                      <MDBCardBody className="d-flex justify-content-center">
                        <div className="d-inline p-2">
                          <MDBCardTitle tag="strong" className="fs-5 me-5">
                            {selectedArtist.artworks[0].title}
                          </MDBCardTitle>
                          <div className="d-inline">
                            <Likes />
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol lg="4">
                    <MDBLightboxItem
                      src={selectedArtist.artworks[1].image}
                      fullscreenSrc={selectedArtist.artworks[1].image}
                      className="w-100"
                    />
                    <MDBCard>
                      <MDBCardBody className="d-flex justify-content-center">
                        <div className="d-inline p-2">
                          <MDBCardTitle tag="strong" className="fs-5 me-5">
                            {selectedArtist.artworks[1].title}
                          </MDBCardTitle>
                          <div className="d-inline">
                            <Likes />
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBLightbox>
            </div>
          </div>
        </div>
      )}
      {/* <MDBRow>
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
      </MDBRow> */}
    </MDBContainer>
  );
}
export default User;
