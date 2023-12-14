import reunionciel1 from "../assets/about/reunionciel1.jpg";
import "../style/About.scss";

function About() {
  return (
    <div className="About">
      <img src={reunionciel1} className="reunionciel1" alt="Reunion Ciel 1" />
      <p>
        <h3>AFAC 974</h3>
        Concevoir, produire et diffuser des animations et des ressources
        valorisant la connaissance de l'environnement des communes de la réunion
        : leur histoire, leur géographie, leur patrimoine culturel, naturel elle
        ambitionne d'apporter aux familles des outils facilitant les
        apprentissages en s'appuyant sur le milieu local et sur l'environnement
        socioculturel des élèves et des parents ; en mettant à leur disposition
        des ressources de qualité éditoriale, dont le contenu aura été validé
        par un comité scientifique (cours, méthodes, exercices en ligne,
        activités ludo-pédagogiques )
      </p>
    </div>
  );
}

export default About;
