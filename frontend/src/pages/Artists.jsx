import mahefadimbiniainadandrianarivelo from "../assets/artists/3_MahefaDimbiniainaRandrianarivelo.jpg";

function Artists() {
  return (
    <div className="container-artist">
      <h2>Mahefa Dimbiniaina Randrianarivelo</h2>
      <h3>Photographe</h3>
      <img
        src={mahefadimbiniainadandrianarivelo}
        alt="Mahefa Dimbiniaina Randrianarivelo"
      />
      <div className="artist-description">
        <p>
          Mahefa Dimbiniaina Randrianarivelo, né à Antananarivo en 1991, est un
          photographe surréaliste Malagasy.Commençant par le graphic design et
          le digital painting, il choisit d'approfondir la photographie pour
          s'exprimer. Inspiré par les grands noms du surréalisme : René
          Magritte, Claude Cahun, Man Ray, plus récemment, Erik Johansson ou
          Grégory Crewdson, sa principale source d'inspiration reste le cinéaste
          Wes Anderson.En 2022, il est le lauréat du prix Paritana, prix d'art
          contemporain malagasy et effectue ainsi une résidence de création
          d'une durée de trois mois à la Cité Internationale des Arts à Paris.
        </p>
      </div>
    </div>
  );
}

export default Artists;
