import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  //   MDBAnimation,
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  //   MDBCol,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBTypography,

  //   MDBRow,
} from "mdb-react-ui-kit";
import CathedraleAntsirabe from "../assets/artworks/13_CathédraleAntsirabe.jpg";
import bredechouchou from "../assets/artworks/6_BredeChouchou.jpg";
import analakelyantananarivo from "../assets/artworks/11_AnalakelyAntananarivo.jpg";
import ilneresteplusque from "../assets/artworks/16_IlNeRestePlusQue[...].jpg";
// import Likes from "../components/Likes";

function Artworks() {
  return (
    <MDBContainer fluid className="pt-5">
      <h2
        className="fs-2 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Patrimoine iconographique de l’océan indien
      </h2>
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
      <div>
        <div className="d-flex flex-column mb-3">
          <div className="p-2">
            <MDBCarousel showControls showIndicators>
              <MDBCarouselItem itemId={1}>
                <img
                  src={CathedraleAntsirabe}
                  className="d-block w-100 img-fluid rounded"
                  alt="Cathédrale , Antsirabe"
                />
                <MDBCard className="d-flex flex-column justify-content-center square border p-2 mt-3">
                  <MDBCardBody>
                    <MDBCardTitle tag="strong" className="fs-4">
                      nom de l'oeuvre
                    </MDBCardTitle>
                    <MDBCardText>
                      <MDBTypography tag="em" className="d-block">
                        dimention de l'oeuvre
                      </MDBTypography>
                      <MDBTypography tag="em" className="d-block">
                        lieu de création
                      </MDBTypography>
                    </MDBCardText>
                    <div className="d-flex justify-content-end">
                      {/* <Likes /> */}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCarouselItem>
              <MDBCarouselItem itemId={2}>
                <img
                  src={bredechouchou}
                  className="d-block w-100 img-fluid rounded"
                  alt="Deepa Bauhadoor"
                />
                <MDBCard className="d-flex flex-column justify-content-center square border  p-2 mt-3">
                  <MDBCardBody>
                    <MDBCardTitle tag="strong" className="fs-4">
                      nom de l'oeuvre
                    </MDBCardTitle>
                    <MDBCardText>
                      <MDBTypography tag="em" className="d-block">
                        dimention de l'oeuvre
                      </MDBTypography>
                      <MDBTypography tag="em" className="d-block">
                        lieu de création
                      </MDBTypography>
                    </MDBCardText>
                    <div className="d-flex justify-content-end">
                      {/* <Likes /> */}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCarouselItem>
              <MDBCarouselItem itemId={3}>
                <img
                  src={analakelyantananarivo}
                  className="d-block w-100 img-fluid rounded"
                  alt="Analakely, Antananarivo"
                />
                <MDBCard className="d-flex flex-column justify-content-center square border  p-2 mt-3">
                  <MDBCardBody>
                    <MDBCardTitle tag="strong" className="fs-4">
                      nom de l'oeuvre
                    </MDBCardTitle>
                    <MDBCardText>
                      <MDBTypography tag="em" className="d-block">
                        dimention de l'oeuvre
                      </MDBTypography>
                      <MDBTypography tag="em" className="d-block">
                        lieu de création
                      </MDBTypography>
                    </MDBCardText>
                    <div className="d-flex justify-content-end">
                      {/* <Likes /> */}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCarouselItem>
              <MDBCarouselItem itemId={4}>
                <img
                  src={ilneresteplusque}
                  className="d-block w-100 img-fluid rounded"
                  alt="Il ne reste plus que [...]"
                />
                <MDBCard className="d-flex flex-column justify-content-center square border  p-2 mt-3">
                  <MDBCardBody>
                    <MDBCardTitle tag="strong" className="fs-4">
                      nom de l'oeuvre
                    </MDBCardTitle>
                    <MDBCardText>
                      <MDBTypography tag="em" className="d-block">
                        dimention de l'oeuvre
                      </MDBTypography>
                      <MDBTypography tag="em" className="d-block">
                        lieu de création
                      </MDBTypography>
                    </MDBCardText>
                    <div className="d-flex justify-content-end">
                      {/* <Likes /> */}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCarouselItem>
            </MDBCarousel>
          </div>

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
        </div>
      </div>
    </MDBContainer>
  );
}

export default Artworks;
