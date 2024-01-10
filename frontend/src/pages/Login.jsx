import React, { useState } from "react";
import "../style/Login.scss";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Login() {
  const { login } = useApp();
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const success = await login(formValue);

    if (success) {
      navigate("/home");
    }
  };

  return (
    <form className="user-form" onSubmit={handleLogin}>
      <h1>Connexion</h1>
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
      <MDBInput
        className="mb-4"
        value={formValue.password}
        name="password"
        onChange={onChange}
        id="validationUser02"
        required
        label="Mot de passe"
        type="password"
      />

      <MDBRow className="mb-4">
        <MDBCol className="d-flex justify-content-center">
          <MDBCheckbox
            id="form2Example3"
            label="Se souvenir de moi"
            defaultChecked
          />
        </MDBCol>
        <MDBCol>
          <Link to="/forgottenpassword">Mot de passe oublié ?</Link>
        </MDBCol>
      </MDBRow>

      <MDBBtn type="submit" className="mb-4" block>
        Se connecter
      </MDBBtn>

      <div className="text-center">
        <p>
          Pas encore membre ? <Link to="/register">Enregistrez-vous</Link>
        </p>
      </div>
    </form>
  );
}

export default Login;
