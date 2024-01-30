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
      <div className="d-grid gap-2 col-6 mx-auto">
        <MDBBtn className="mt-5 mb-4">
          <Link to="/admin/adminuser" className="nav-link navLink">
            Gérer les utilisateurs
          </Link>
        </MDBBtn>
        <MDBBtn className="mt-3 mb-8">
          <Link to="/admin/adminart" className="nav-link navLink">
            Gérer les oeuvres et artistes
          </Link>
        </MDBBtn>
      </div>
    </>
  );
}

export default AdminHome;
