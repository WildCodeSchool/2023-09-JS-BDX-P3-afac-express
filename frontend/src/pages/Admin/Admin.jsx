import { MDBContainer } from "mdb-react-ui-kit";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <MDBContainer
      fluid
      className="pt-5 d-flex justify-content-center flex-column"
    >
      <Outlet />
    </MDBContainer>
  );
}

export default Admin;
