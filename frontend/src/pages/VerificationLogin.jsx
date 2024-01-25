import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function VerificationLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
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

  const onClickValidate = async () => {
    try {
      // Utilisez axios pour faire une requête à la route backend

      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/auth/get-question/${
          formValue.email
        }`
      );

      if (data) {
        // Utilisez les données récupérées comme nécessaire
        // Naviguez vers la page suivante, par exemple /resetpassword
        navigate("/resetpassword", {
          state: {
            ...data,
            email: formValue.email,
          },
        });
      } else {
        alert(
          "Adresse e-mail non trouvée. Veuillez vérifier l'adresse e-mail renseignée."
        );
      }
    } catch (err) {
      setError("Adresse e-mail non trouvée");
    }
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
        required="required"
        label="Adresse mail"
        type="email"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <MDBBtn type="submit" className="mb-4" block onClick={onClickValidate}>
        Valider
      </MDBBtn>
    </form>
  );
}

export default VerificationLogin;
