import React, { useState } from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn, MDBSwitch } from "mdb-react-ui-kit";
import { useApp } from "../context/AppContext";
import Redirection from "../components/Redirection";

export default function Register() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const { register } = useApp();

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <form className="user-form">
      <h1>Créer un compte</h1>
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput
            className="mb-4"
            value={formValue.firstname}
            name="firstname"
            onChange={onChange}
            id="validationUser1"
            required
            label="Prénom"
            type="firstname"
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            className="mb-4"
            value={formValue.lastname}
            name="lastname"
            onChange={onChange}
            id="validationUser2"
            required
            label="Nom"
            type="lastname"
          />
        </MDBCol>
      </MDBRow>
      <MDBInput
        className="mb-4"
        value={formValue.email}
        name="email"
        onChange={onChange}
        id="validationUser3"
        required
        label="Email"
        type="email"
      />
      <MDBInput
        className="mb-4"
        value={formValue.password}
        name="password"
        onChange={onChange}
        id="validationUser4"
        required
        label="Mot de passe"
        type="password"
      />

      <MDBSwitch
        id="flexSwitchCheckDefault"
        label="Admin"
        onClick={() => setFormValue({ ...formValue, admin: !formValue.admin })}
      />

      <MDBBtn
        type="submit"
        className="mb-4"
        block
        onClick={() => register(formValue)}
      >
        Suivant
      </MDBBtn>

      <Redirection />
    </form>
  );
}
