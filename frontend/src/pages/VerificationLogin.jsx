import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function VerificationLogin() {
  const navigate = useNavigate();

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

      const response = await axios.get(
        `http://localhost:5021/users/${formValue.email}`
      );
      // console.log("response ???", response);
      if (response.data) {
        // Utilisez les données récupérées comme nécessaire
        console.error("Utilisateur récupéré :", response.data[0]);
        // Naviguez vers la page suivante, par exemple /resetpassword
        navigate("/resetpassword");
      } else {
        alert(
          "Adresse e-mail non trouvée. Veuillez vérifier l'adresse e-mail renseignée."
        );
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur :", error);
      alert(
        "Erreur lors de la récupération de l'utilisateur. Veuillez réessayer plus tard."
      );
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
        required
        label="Adresse mail"
        type="email"
      />
      <MDBBtn type="submit" className="mb-4" block onClick={onClickValidate}>
        Valider
      </MDBBtn>
    </form>
  );
}

export default VerificationLogin;
