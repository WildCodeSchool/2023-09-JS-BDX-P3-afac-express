import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import mahefadimbiniainadandrianarivelo from "../assets/artists/3_MahefaDimbiniainaRandrianarivelo.jpg";

function Artists() {
  return (
    <>
      <h2
        className="fs-2 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Mahefa Dimbiniaina Randrianarivelo
      </h2>

      <h3 className="fs-5 text text-center fst-italic pb-4">Photographe</h3>

      <MDBDropdown className="d-flex justify-content-center pb-5 ">
        <MDBDropdownToggle
          tag="a"
          className="btn btn-primary bg-transparent text-dark"
        >
          Autres artistes
        </MDBDropdownToggle>

        <MDBDropdownMenu>
          <MDBDropdownItem link href="#">
            Lara Sousa
          </MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Deepa Bauhadoor
          </MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Mahefa Dimbiniaina Randrianarivelo
          </MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Mathilde Neri
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBCard alignment="center" className="col-10 m-auto" shadow="5">
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <div className="bg-image hover-zoom">
            <MDBCardImage
              src={mahefadimbiniainadandrianarivelo}
              fluid
              alt="Mahefa Dimbiniaina Randrianarivelo"
              class="rounded img-fluid"
            />
          </div>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardText className="p-5 text-start">
            Mahefa Dimbiniaina Randrianarivelo, né à Antananarivo en 1991, est
            un photographe surréaliste Malagasy.Commençant par le graphic design
            et le digital painting, il choisit d'approfondir la photographie
            pour s'exprimer. Inspiré par les grands noms du surréalisme : René
            Magritte, Claude Cahun, Man Ray, plus récemment, Erik Johansson ou
            Grégory Crewdson, sa principale source d'inspiration reste le
            cinéaste Wes Anderson.En 2022, il est le lauréat du prix Paritana,
            prix d'art contemporain malagasy et effectue ainsi une résidence de
            création d'une durée de trois mois à la Cité Internationale des Arts
            à Paris.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default Artists;
