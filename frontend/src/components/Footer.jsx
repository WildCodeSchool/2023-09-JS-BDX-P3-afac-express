function Footer() {
  return (
    <div className="container-footer">
      <div className="contact">
        <h2 className="title-contact">Nous contacter</h2>
        <div className="container flex">
          <img src="./src/assets/footer/logoTelephone.svg" alt="phone-logo" />
          <p className="telephone-number">+262 692 31 83 98</p>
        </div>
        <div className="container flex">
          <img src="./src/assets/footer/logoMail.svg" alt="mail-logo" />
          <p className="adress-mail">afac974@gmail.com</p>
        </div>
        <div className="general-information">
          <p>Mentions Générales</p>
        </div>
      </div>
      <span className="vertical-line"> </span>
      <div className="partnerships">
        <h2 className="title-partnerships">Partenaires</h2>
        <div className="container flex">
          <img
            className="logo-left"
            src="./src/assets/footer/logoObjetTemoin.svg"
            alt="objet-temoin-logo"
          />
          <img
            className="logo-right"
            src="./src/assets/footer/logoDepartementReunion.svg"
            alt="reunion-department-logo"
          />
        </div>
        <div className="copyright">
          <p>©2023-2024 Afac express</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
