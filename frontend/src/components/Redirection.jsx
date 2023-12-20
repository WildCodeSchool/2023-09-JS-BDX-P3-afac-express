import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Redirection() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <MDBBtn type="button" onClick={handleGoBack} color="link" className="mb-5">
      Retour
    </MDBBtn>
  );
}

export default Redirection;
