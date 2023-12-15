import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBContainer,
} from "mdb-react-ui-kit";
import reunionciel1 from "../assets/about/reunionciel1.jpg";
import "../style/About.scss";

function About() {
  return (
    <div>
      <MDBContainer fluid className="pt-5">
        <MDBCard alignment="center" className="col-10 m-auto" shadow="5">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage src={reunionciel1} fluid alt="Ciel de la réunion" />
          </MDBRipple>
          <MDBCardBody>
            <h1 className="fs-2 text text-start fw-bold pt-5">AFAC 974</h1>
            <MDBCardText className="p-4 text-start">
              Concevoir, produire et diffuser des animations et des ressources
              valorisant la connaissance de l'environnement des communes de la
              réunion : leur histoire, leur géographie, leur patrimoine
              culturel, naturel elle ambitionne d'apporter aux familles des
              outils facilitant les apprentissages en s'appuyant sur le milieu
              local et sur l'environnement socioculturel des élèves et des
              parents ; en mettant à leur disposition des ressources de qualité
              éditoriale, dont le contenu aura été validé par un comité
              scientifique (cours, méthodes, exercices en ligne, activités
              ludo-pédagogiques ).
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default About;
