import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
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

function Home() {
  return (
    <MDBContainer fluid className="pt-5">
      <MDBCard>
        <MDBCardText>
          <h1>Bienvenue sur notre musée interactif</h1>
        </MDBCardText>
        <MDBCardBody>
          <MDBCardText>
            <p>
              Les populations de l'océan Indien partagent et diffusent leur
              patrimoine iconographique par la transmission pédagogique, le
              soutien artistique et des entretiens sur l'image.
              <Link to="/About" className="about-button">
                <p>À propos</p>
              </Link>
            </p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem itemId={1}>
          <img src={larasousa} className="d-block w-100" alt="Lara Sousa" />
          <MDBCarouselCaption>
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
          <MDBCarouselCaption>
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
          <MDBCarouselCaption>
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
          <MDBCarouselCaption>
            <h5>Mathilde Neri</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem itemId={1}>
          <img
            src={CathedraleAntsirabe}
            className="d-block w-100"
            alt="Cathédrale , Antsirabe"
          />
          <MDBCarouselCaption>
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
          <MDBCarouselCaption>
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
          <MDBCarouselCaption>
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
          <MDBCarouselCaption>
            <h5>Il ne reste plus que [...]</h5>
            <p>Mathilde Neri</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Home;
