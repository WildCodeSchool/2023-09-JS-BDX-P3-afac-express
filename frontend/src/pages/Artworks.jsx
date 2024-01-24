import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import "../App.scss";
import Art from "../components/Art";

function Artworks() {
  return (
    <MDBContainer fluid className="pt-5 pb-5">
      <h3
        className="fs-1 text text-center fw-bold pt-5 mb-6"
        style={{ color: "#7b273d" }}
      >
        Patrimoine iconographique de l'océan indien
      </h3>
      <Art />
    </MDBContainer>
  );
}

export default Artworks;
