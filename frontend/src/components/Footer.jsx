import logoTelephone from "../assets/footer/logoTelephone.svg";
import logoMail from "../assets/footer/logoMail.svg";
import logoObjetTemoin from "../assets/footer/logoObjetTemoin.svg";
import logoDepartementReunion from "../assets/footer/logoDepartementReunion.svg";

function Footer() {
  return (
    <div className="container-footer">
      <div className="contact">
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
        <div className="container-rules">
          <div className="general-information">
            <p>Mentions Générales</p>
          </div>
        </div>
      </div>
      <span className="vertical-line"> </span>
      <div className="partnerships">
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
        <div className="container-rules">
          <div className="copyright">
            <p>©2023-2024 Afac express</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
