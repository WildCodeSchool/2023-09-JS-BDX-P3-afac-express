import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import { Link } from "react-router-dom";

function VerificationLogin() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <form className="user-form" onSubmit={handleLogin}>
      <h1>Vérification de l'identifiant</h1>
      <MDBInput
        className="mb-4"
        value={formValue.email}
        name="email"
        onChange={onChange}
        id="validationUser01"
        required
        label="Adresse mail"
        type="email"
      />
      <MDBBtn type="submit" className="mb-4" block>
        <Link className="nav-link navLink" to="/resetpassword">
          Valider
        </Link>
      </MDBBtn>
    </form>
  );
}

export default VerificationLogin;
