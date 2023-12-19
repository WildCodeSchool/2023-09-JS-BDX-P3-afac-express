import {
  MDBBtn,
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function AdminUser() {
  return (
    <MDBContainer fluid className="pt-5 pb-5">
      <h3
        className="fs-1 text text-center fw-bold pt-5 pb-5 text-uppercase"
        style={{ color: "#7b273d" }}
      >
        Gestion des utilisateurs
      </h3>
      <section>
        <div className="shadow-4 rounded-5 overflow-hidden">
          <MDBTable>
            <MDBTableHead light>
              <tr>
                <th>Identifiant</th>
                <th>Mot de passe</th>
                <th>Date de naissance</th>
                <th>Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody style={{ verticalAlign: "middle" }}>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Ben et nuts noit</p>
                      <p className="text-muted mb-0">ben.noit@test.fr</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">1234</p>
                </td>
                <td>1990-01-01</td>
                <td>
                  <MDBBtn
                    className="fw-bold"
                    color="link"
                    rounded
                    size="sm"
                    rippleColor="dark"
                  >
                    Edit
                  </MDBBtn>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                      className="rounded-circle"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Nel ia</p>
                      <p className="text-muted mb-0">nel.ia@test.fr</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">3456</p>
                </td>
                <td>1990-01-01</td>
                <td>
                  <MDBBtn
                    className="fw-bold"
                    color="link"
                    rounded
                    size="sm"
                    rippleColor="dark"
                  >
                    Edit
                  </MDBBtn>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                      className="rounded-circle"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Floflo BRUNLOURS</p>
                      <p className="text-muted mb-0">azerty@hotmail.fr</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">12348</p>
                </td>
                <td>2001-09-11</td>
                <td>
                  <MDBBtn
                    className="fw-bold"
                    color="link"
                    rounded
                    size="sm"
                    rippleColor="dark"
                  >
                    Edit
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </section>
    </MDBContainer>
  );
}
