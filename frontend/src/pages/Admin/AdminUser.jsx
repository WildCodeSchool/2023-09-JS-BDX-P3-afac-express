import {
  MDBBtn,
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import Redirection from "../../components/Redirection";

export default function AdminUser() {
  const navigate = useNavigate();
  const { preloadUserForAdminData } = useApp();

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
          <MDBTable align="middle" responsive>
            <MDBTableHead light>
              <tr>
                <th>Email</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody style={{ verticalAlign: "middle" }}>
              {preloadUserForAdminData[0].map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="ms-3">
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{user.lastname}</p>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{user.firstname}</p>
                  </td>

                  <td>
                    <MDBBtn
                      className="fw-bold navLink "
                      style={{ color: "#ffffff" }}
                      color="link"
                      rounded
                      size="sm"
                      rippleColor="dark"
                      onClick={() =>
                        navigate(`/admin/adminusermanagement/${user.id}`)
                      }
                    >
                      Éditer
                    </MDBBtn>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </section>
      <Redirection />
    </MDBContainer>
  );
}
