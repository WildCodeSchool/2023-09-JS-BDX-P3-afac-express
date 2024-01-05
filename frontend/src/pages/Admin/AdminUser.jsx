import {
  MDBBtn,
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const userFetch = async () => {
  try {
    const { data } = await axios.get(`http://localhost:5021/users`);
    return data;
  } catch (err) {
    console.error(err);
    alert(err.message); // eslint-disable-line no-alert
    return null;
  }
};

export default function AdminUser() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await userFetch();
      if (userData) {
        setUsers([...userData[0]]);
      }
    };

    fetchUsers();
  }, []);

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
                <th>Identifiant</th>
                <th>Mot de passe</th>
                <th>Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody style={{ verticalAlign: "middle" }}>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="ms-3">
                      <p className="fw-bold mb-1">
                        {user.firstname}
                        {user.lastname}
                      </p>
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{user.password}</p>
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
    </MDBContainer>
  );
}
