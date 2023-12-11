import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <h1>Bienvenue sur notre musée interactif</h1>
        <p>
          Les populations de l'<b>océan Indien</b> partagent et diffusent leur
          patrimoine iconographique par la <b>transmission pédagogique</b>, le{" "}
          <b>soutien artistique</b> et des entretiens sur l'<b>image</b>.
        </p>
        <Link to="/About" className="about-button">
          <p>À propos</p>
        </Link>
      </div>
      <div>
        <h2>Artistes</h2>
        <div>
          <div>
            <h3>Ryan Dave Chetty</h3>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <h3>Deepa Bauhadoor</h3>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <h3>Mahefa Dimbiniaina Randrianarivelo</h3>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <h3>Mathilde Neri</h3>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <h3>Lara Sousa</h3>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <h2>Collection</h2>
        <p>Regarder le monde c'est toucher sa diversité.</p>
        <div>
          <img src="" alt="" />
          <h3>Creolization</h3>
          <h4>Ryan Dave Chetty</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Brède chouchou</h3>
          <h4>Deepa Bauhadoor</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Analakely, Antananarivo</h3>
          <h4>Mahefa Dimbiniaina Randrianarivelo</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Il ne reste plus que [...]</h3>
          <h4>Mathilde Neri</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h3>
            Tirem nos tudo mas deixem nos a música [...] Quando eu nasci era
            meio dia e o sol brillava [...] regressaremos, sombrias, corpos
            fluídos de feridas incuráveis
          </h3>
          <h4>Lara Sousa</h4>
        </div>
      </div>
      div
    </div>
  );
}

export default Home;
