import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBSwitch,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useApp } from "../context/AppContext";
import Redirection from "../components/Redirection";

export default function Register() {
  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    is_admin: false,
  });

  const { register } = useApp();
  const submitform = (e) => {
    e.preventDefault();
    register(formValue);
  };

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <MDBContainer fluid className="mt-5">
      <form className="user-form" onSubmit={(event) => submitform(event)}>
        <h1 className="mb-5">Créer un compte</h1>
        <MDBRow className="mb-2">
          <MDBCol>
            <MDBInput
              className="mb-3"
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
          label="Administrateur"
          onClick={() =>
            setFormValue({ ...formValue, is_admin: !formValue.is_admin })
          }
        />

        <MDBBtn type="submit" className="mb-4 mt-4" block>
          Suivant
        </MDBBtn>

        <Redirection />
      </form>
    </MDBContainer>
  );
}
