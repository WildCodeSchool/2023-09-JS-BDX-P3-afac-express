import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import logoTelephone from "../../assets/footer/logoTelephone.svg";
import logoMail from "../../assets/footer/logoMail.svg";
import logoObjetTemoin from "../../assets/footer/logoObjetTemoin.svg";
import logoDepartementReunion from "../../assets/footer/logoDepartementReunion.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-lg-left container-footer">
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <div className="shadow-lg contact">
              <h2 className="title-contact">Nous Contacter</h2>
              <div className="container number">
                <img
                  className="logo-telephone"
                  src={logoTelephone}
                  alt="icone telephone"
                />
                <p className="telephone-number">+262 692 31 83 98</p>
              </div>
              <div className="container mail">
                <img className="logo-mail" src={logoMail} alt="icone mail" />
                <p className="adress-mail">afac974@gmail.com</p>
              </div>
            </div>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <div className=" shadow-lg partnerships">
              <h2 className="title-partnerships">Partenaires</h2>
              <div className="container-partnerships">
                <img
                  className="logo-left"
                  src={logoObjetTemoin}
                  alt="objet-temoin-logo"
                />
                <img
                  className="logo-right"
                  src={logoDepartementReunion}
                  alt="reunion-department-logo"
                />
              </div>
            </div>
          </MDBCol>
          <MDBCol>
            <div className=" shadow-lg development">
              <h2 className="title-development">Développement</h2>
              <div className="container-development">
                <p className="text-start text-decoration-underline">
                  Nélia COURTAIS
                </p>
                <p className="text-decoration-underline">Benoit HAYET</p>
                <p className="text-end text-decoration-underline">
                  Florian BRUN
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center copyright"
        style={{ backgroundColor: "#7b273d" }}
      >
        &copy; {new Date().getFullYear()} Copyright: Afac express
      </div>
    </MDBFooter>
  );
}
