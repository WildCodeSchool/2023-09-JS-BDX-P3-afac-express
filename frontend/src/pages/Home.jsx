import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import "../style/Home.scss";
import { useApp } from "../context/AppContext";

function Home() {
  const { artistCollection, artCollection } = useApp();
  return (
    <MDBContainer fluid className="pt-5   ">
      <MDBCard className="card-custom  ">
        <MDBCardBody>
          <MDBCardTitle>
            <span className="h1">Bienvenue sur notre musée interactif</span>
          </MDBCardTitle>
          <MDBCardText>
            L'Appropriation du patrimoine iconographique de l'océan Indien par
            les populations vise à diffuser les images du sud-ouest de l'océan
            Indien auprès des publics de ces territoires par la transmission et
            la médiation pédagogique, le soutien à la création artistique et le
            partage par l'organisation d'entretiens du patrimoine sur l'image.
            Au fur et à mesure du projet, des supports de valorisation sont
            diffusés sur le site internet de l'Iconothèque et sur ses réseaux
            sociaux. Le parti-pris de l'exposition "Patrimoines iconographiques
            de l'océan Indien", conçue à partir des oeuvres des artistes en
            résidence dans les institutions partenaires du projet est
            l'élaboration d'une cartographie artistique (réelle et imaginaire)
            de l'océan Indien. L'Appropriation du patrimoine iconographique de
            l'océan Indien par les populations, portée par le Département de La
            Réunion, est cofinancée par l'Union européenne au titre du PO
            INTERREG V océan Indien et soutenue par la Commission de l'océan
            Indien (COI).
          </MDBCardText>
          <MDBBtn className="btn">
            <Link to="/About" className="nav-link navLink">
              À propos
            </Link>
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <h2 className="mt-5 " style={{ color: "#7b273d" }}>
        Artistes
      </h2>

      <MDBCarousel className="mt-3  " showControls showIndicators>
        {artistCollection && artistCollection.length > 0 ? (
          artistCollection.map((artist) => (
            <MDBCarouselItem itemId={artist.id} key={artist.id}>
              <img
                src={artist.image}
                className="d-block w-100"
                alt="Lara Sousa"
              />
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle className="text-center mb-0">
                    {artist.name}
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCarouselItem>
          ))
        ) : (
          <p>Aucun artiste disponible.</p>
        )}
      </MDBCarousel>

      <h2 className="mt-5" style={{ color: "#7b273d" }}>
        Collections
      </h2>
      <p className="text-left">
        "Regarder le monde c'est toucher sa diversité".
      </p>
      <MDBCarousel className="mt-3 mb-5 " showControls showIndicators>
        {artCollection && artCollection.length > 0 ? (
          artCollection.map((art) => (
            <MDBCarouselItem itemId={art.id} key={art.id}>
              <img src={art.image} className="d-block w-100" alt={art.title} />
              <MDBCarouselCaption className="carousel-description">
                <p>Mahefa D. Randrianarivelo</p>
              </MDBCarouselCaption>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle className="text-center mb-0">
                    {art.title}
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCarouselItem>
          ))
        ) : (
          <p>Aucune œuvre disponible.</p>
        )}
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Home;
