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

import { Link } from "react-router-dom";
import deepabauhadoor from "../assets/artists/2_DeepaBauhadoor.jpg";
import mahefadimbiniainadandrianarivelo from "../assets/artists/3_MahefaDimbiniainaRandrianarivelo.jpg";
import mathildeneri from "../assets/artists/4_MathildeNeri.jpg";
import larasousa from "../assets/artists/1_LaraSousa.jpg";
import CathedraleAntsirabe from "../assets/artworks/13_CathédraleAntsirabe.jpg";
import bredechouchou from "../assets/artworks/6_BredeChouchou.jpg";
import analakelyantananarivo from "../assets/artworks/11_AnalakelyAntananarivo.jpg";
import ilneresteplusque from "../assets/artworks/16_IlNeRestePlusQue[...].jpg";
import "../style/Home.scss";

function Home() {
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
        <MDBCarouselItem itemId={1}>
          <img src={larasousa} className="d-block w-100" alt="Lara Sousa" />
          <MDBCarouselCaption className="carousel-description">
            <h5>Lara Sousa</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img
            src={deepabauhadoor}
            className="d-block w-100"
            alt="Deepa Bauhadoor"
          />
          <MDBCarouselCaption className="carousel-description">
            <h5>Deepa Bauhadoor</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src={mahefadimbiniainadandrianarivelo}
            className="d-block w-100"
            alt="Mahefa D. Randrianarivelo"
          />
          <MDBCarouselCaption className="carousel-description">
            <h5>Mahefa D. Randrianarivelo</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4}>
          <img
            src={mathildeneri}
            className="d-block w-100"
            alt="Mathilde Neri"
          />
          <MDBCarouselCaption className="carousel-description">
            <h5>Mathilde Neri</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
      <h2 className="mt-5" style={{ color: "#7b273d" }}>
        Collections
      </h2>
      <p className="text-left">
        "Regarder le monde c'est toucher sa diversité".
      </p>
      <MDBCarousel className="mt-3 mb-5 " showControls showIndicators>
        <MDBCarouselItem itemId={1}>
          <img
            src={CathedraleAntsirabe}
            className="d-block w-100"
            alt="Cathédrale , Antsirabe"
          />
          <MDBCarouselCaption className="carousel-description">
            <h5>Cathédrale , Antsirabe</h5>
            <p>Mahefa D. Randrianarivelo</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img
            src={bredechouchou}
            className="d-block w-100"
            alt="Deepa Bauhadoor"
          />
          <MDBCarouselCaption className="carousel-description">
            <h5>Brède chouchou</h5>
            <p>Deepa Bauhadoor</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src={analakelyantananarivo}
            className="d-block w-100"
            alt="Analakely, Antananarivo"
          />
          <MDBCarouselCaption className="carousel-description">
            <h5>Analakely, Antananarivo</h5>
            <p>Mahefa D. Randrianarivelo</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4}>
          <img
            src={ilneresteplusque}
            className="d-block w-100"
            alt="Il ne reste plus que [...]"
          />
          <MDBCarouselCaption className="carousel-description">
            <h5>Il ne reste plus que [...]</h5>
            <p>Mathilde Neri</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Home;
