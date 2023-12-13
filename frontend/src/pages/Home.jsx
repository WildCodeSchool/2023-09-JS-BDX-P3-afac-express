import { Link } from "react-router-dom";
import "../style/Home.scss";
import "../App.css";
import ryandavechetty from "../assets/artists/1_RyanDaveChetty.jpg";
import deepabauhadoor from "../assets/artists/2_DeepaBauhadoor.jpg";
import mahefadimbiniainadandrianarivelo from "../assets/artists/3_MahefaDimbiniainaRandrianarivelo.jpg";
// import mathildeneri from "../assets/artists/4_MathildeNeri.jpg";
// import larasousa from "../assets/artists/5_LaraSousa.jpg";
import creolization from "../assets/artworks/1_Creolization.jfif";
import bredechouchou from "../assets/artworks/4_BredeChouchou.jfif";
import analakelyantananarivo from "../assets/artworks/9_AnalakelyAntananarivo.jfif";
import ilneresteplusque from "../assets/artworks/14_IlNeRestePlusQue[...].jfif";

function Home() {
  return (
    <div className="container">
      <div className="container-img-introduction">
        <img src="" alt="" />
        <div className="introduction-containt">
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
      </div>
      <div className="container-artist-title">
        <h2>Artistes</h2>

        <div className="container-artist">
          <div className="title-img-artist">
            <div className="artist">
              <h3>Ryan Dave Chetty</h3>
            </div>
            <img src={ryandavechetty} alt="Ryan Dave Chetty" />
          </div>

          <div className="title-img-artist">
            <div className="artist">
              <h3>Deepa Bauhadoor</h3>
            </div>
            <img src={deepabauhadoor} alt="Deepa Bauhadoor" />
          </div>

          <div className="title-img-artist">
            <div className="artist">
              <h3>Mahefa D. Randrianarivelo</h3>
            </div>
            <img
              src={mahefadimbiniainadandrianarivelo}
              alt="Mahefa D. Randrianarivelo"
            />
          </div>

          {/*           
          <div className="title-img-artist">
            <div className="artist">
          //     <h3>Mathilde Neri</h3>
          //     
          //   </div>
          //   <img src={mathildeneri} alt="Mathilde Neri" />
          // </div> 

          // 
          <div className="title-img-artist">
            <div className="artist">
          //     <h3>Lara Sousa</h3>
          //     
          //   </div>
          //   <img src={larasousa} alt="Lara Sousa" />
          // </div> */}
        </div>
        <div className="container-collection-title">
          <h2>Collection</h2>
          <p>Regarder le monde c'est toucher sa diversité.</p>

          <ul className="horizontal-list">
            <div className="first-container_collection">
              <li className="collection">
                <img src={creolization} alt="Creolization" />
                <div className="collection-text">
                  <h3>Creolization</h3>
                  <h4>Ryan Dave Chetty</h4>
                </div>
              </li>

              <li className="collection">
                <img src={bredechouchou} alt="Deepa Bauhadoor" />
                <div className="collection-text">
                  <h3>Brède chouchou</h3>
                  <h4>Deepa Bauhadoor</h4>
                </div>
              </li>
            </div>
            <div className="second-container_collection">
              <li className="collection">
                <img
                  src={analakelyantananarivo}
                  alt="Analakely, Antananarivo"
                />
                <div className="collection-text">
                  <h3>Analakely, Antananarivo</h3>
                  <h4>Mahefa Dimbiniaina Randrianarivelo</h4>
                </div>
              </li>

              <li className="collection">
                <img src={ilneresteplusque} alt="Il ne reste plus que [...]" />
                <div className="collection-text">
                  <h3>Il ne reste plus que [...]</h3>
                  <h4>Mathilde Neri</h4>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
