import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import logoTelephone from "../../assets/footer/logoTelephone.svg";
import logoMail from "../../assets/footer/logoMail.svg";
import logoObjetTemoin from "../../assets/footer/logoObjetTemoin.svg";
import logoDepartementReunion from "../../assets/footer/logoDepartementReunion.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <MDBFooter className="text-center container-footer">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <div
              className="contact"
              style={{
                boxShadow: "none",
              }}
            >
              <h2 className="title-contact">Nous Contacter</h2>
              <div className="contact-details">
                <div className="container-number">
                  <img
                    className="logo-telephone"
                    src={logoTelephone}
                    alt="icone telephone"
                  />
                  <p className="telephone-number">
                    <a href="tel:">+262 692 31 83 98</a>
                  </p>
                </div>
                <div className="container-mail">
                  <img className="logo-mail" src={logoMail} alt="icone mail" />
                  <p className="adress-mail">
                    <a href="mailto:">afac974@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </MDBCol>

          <MDBCol lg="6" md="12">
            <div
              className="partnerships"
              style={{
                boxShadow: "none",
              }}
            >
              <h2 className="title-partnerships">Partenaires</h2>
              <div className="container-partnerships">
                <a
                  href="https://www.departement974.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="logo-left"
                    src={logoDepartementReunion}
                    alt="reunion-department-logo"
                  />
                </a>
                <a
                  href="https://museo.vandanjon.com/index.php/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="logo-right"
                    src={logoObjetTemoin}
                    alt="objet-temoin-logo"
                  />
                </a>
              </div>
            </div>
          </MDBCol>
          <MDBCol>
            <div
              className="development"
              style={{
                boxShadow: "none",
              }}
            >
              <h2 className="title-development">Développement</h2>
              <div className=" container-development">
                <p className="developer">
                  <a
                    href="https://github.com/NeliaCou"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Nelia COURTAIS
                  </a>
                </p>
                <p className="developer">
                  <a
                    href="https://github.com/Benoit-Hayet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Benoit HAYET
                  </a>
                </p>
                <p className="developer">
                  <a
                    href="https://github.com/BRUNFlorian"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Florian BRUN
                  </a>
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
