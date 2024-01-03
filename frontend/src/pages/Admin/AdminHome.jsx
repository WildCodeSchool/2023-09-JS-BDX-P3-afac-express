import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <>
      <h3
        className=" d-flex justify-content-center fs-1 text text-center fw-bold pt-5 text-uppercase"
        style={{ color: "#7b273d" }}
      >
        Administrateur
      </h3>
      <MDBBtn className="mt-5 mb-4">
        <Link to="/admin/adminuser" className="nav-link navLink">
          Gérer les utilisateurs
        </Link>
      </MDBBtn>
      <MDBBtn className="mt-5 mb-4">
        <Link to="/admin/adminart" className="nav-link navLink">
          Gérer les oeuvres et artistes
        </Link>
      </MDBBtn>
      <MDBBtn className="mt-5 mb-6">
        <Link to="/accountmanagement" className="nav-link navLink">
          Gérer mon compte
        </Link>
      </MDBBtn>
    </>
  );
}

export default AdminHome;
