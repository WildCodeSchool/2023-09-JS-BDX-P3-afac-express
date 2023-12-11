function Footer() {
  return (
    <div className="container-footer">
      <div className="contact">
        <h2 className="title-contact">Nous contacter</h2>
        <img src="./src/assets/footer/logoTelephone.svg" alt="phone-logo" />
        <p>+262 692 31 83 98</p>
        <img src="./src/assets/footer/logoMail.svg" alt="mail-logo" />
        <div className="mail-adress">
          <p>afac974@gmail.com</p>
        </div>
        <div className="general-information">
          <p>Mentions Générales</p>
        </div>
      </div>
      <div className="partnerships">
        <h2 className="title-partnerships">Partenaires</h2>
        <img
          src="./src/assets/footer/logoObjetTemoin.svg"
          alt="objet-temoin-logo"
        />
        <img
          src="./src/assets/footer/logoDepartementReunion.svg"
          alt="reunion-department-logo"
        />
        <div className="copyright">
          <p>©2023-2024 Afac express</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
