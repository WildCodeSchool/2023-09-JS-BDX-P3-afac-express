import { MDBBtn, MDBContainer, MDBNavbarLink } from "mdb-react-ui-kit";

function Admin() {
  return (
    <MDBContainer
      fluid
      className="pt-5 d-flex justify-content-center flex-column"
    >
      <h3
        className=" d-flex justify-content-center fs-1 text text-center fw-bold pt-5 text-uppercase"
        style={{ color: "#7b273d" }}
      >
        Administrateur
      </h3>

      <MDBBtn className="mt-5 mb-4">
        <MDBNavbarLink href="/adminuser">Gérer les utilisateurs</MDBNavbarLink>
      </MDBBtn>
      <MDBBtn className="mt-5 mb-4">
        <MDBNavbarLink href="/adminart">
          Gérer les oeuvres et artistes
        </MDBNavbarLink>
      </MDBBtn>
      <MDBBtn className="mt-5 mb-6">
        <MDBNavbarLink href="/adminuser">Gérer mon compte</MDBNavbarLink>
      </MDBBtn>
    </MDBContainer>
  );
}

export default Admin;
