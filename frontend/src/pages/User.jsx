import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  //   MDBAnimation,
  MDBCol,
  MDBContainer,
  //   MDBCol,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBLightbox,
  MDBLightboxItem,
  MDBRow,

  //   MDBRow,
} from "mdb-react-ui-kit";

import Likes from "../components/Likes";

function User() {
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
          Sélection par artistes
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
            <MDBLightbox>
              <MDBRow>
                <MDBCol lg="4">
                  <MDBLightboxItem
                    src="https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.webp"
                    fullscreenSrc="https://mdbootstrap.com/img/Photos/Slides/1.webp"
                    className="w-100"
                  />
                  <MDBCard className="d-flex flex-column justify-content-center square border p-2 mt-3">
                    <MDBCardBody className="d-flex justify-content-center pl-5">
                      <div className="d-inline p-2">
                        <MDBCardTitle tag="strong" className="fs-5">
                          nom de l'oeuvre
                        </MDBCardTitle>
                        <div className=" d-inline pl-5">
                          <Likes />
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="4">
                  <MDBLightboxItem
                    src="https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.webp"
                    fullscreenSrc="https://mdbootstrap.com/img/Photos/Slides/2.webp"
                    className="w-100"
                  />
                  <MDBCard className="d-flex flex-column justify-content-center square border p-2 mt-3">
                    <MDBCardBody>
                      <MDBCardTitle tag="strong" className="fs-4">
                        nom de l'oeuvre
                      </MDBCardTitle>
                      <div className="d-flex justify-content-end">
                        <Likes />
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="4">
                  <MDBLightboxItem
                    src="https://mdbootstrap.com/img/Photos/Thumbnails/Slides/3.webp"
                    fullscreenSrc="https://mdbootstrap.com/img/Photos/Slides/3.webp"
                    className="w-100"
                  />
                  <MDBCard className="d-flex flex-column justify-content-center square border p-2 mt-3">
                    <MDBCardBody>
                      <MDBCardTitle tag="strong" className="fs-4">
                        nom de l'oeuvre
                      </MDBCardTitle>
                      <div className="d-flex justify-content-end">
                        <Likes />
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBLightbox>
          </div>
        </div>
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
    </MDBContainer>
  );
}
export default User;
