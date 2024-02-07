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
        <MDBCard alignment="center" className="col-10 m-auto mb-8" shadow="5">
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
              L'Association des Familles Amies de Capeline 974 a pour ambition
              de développer un projet de plate-forme d'informations, et de
              formations à caractère pédagogiques, relatives aux outre-mers.
              C'est aussi une mise en relation de partenaires divers, impliqués
              dans le développement durable des outre-mers, en particulier dans
              l'océan Indien. Elle s'adresse aux élèves de la zone et à leurs
              enseignants, à leurs familles, et aux collectivités. Ses
              publications pédagogiques ou scientifiques sont vérifiées par un
              Comité scientifique. Ses actions en ligne et sur le terrain
              s'appuient sur des contributions bénévoles, mais aussi sur le
              travail de stagiaires rémunérés, et, pour 2021, d'un emploi aidé
              (stagiaire en formation à l'IUT de Saint-Pierre). Des
              contributions occasionnelles de chercheurs ou de spécialistes dans
              le domaine du numérique et/ou de l'enseignement nourrissent la
              réflexion autour de l'enseignement avec le numérique (Réunion,
              Inde, Madagascar, Belgique...)
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default About;
