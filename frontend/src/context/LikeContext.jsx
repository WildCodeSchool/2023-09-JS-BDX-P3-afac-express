import { createContext, useContext, useEffect, useMemo, useState } from "react";
// import axios from "axios";
import PropTypes from "prop-types";

const likeContext = createContext();

const artists = [
  {
    id: 1,
    name: "Lara Sousa",
    image: "https://i.postimg.cc/13kZ1Z6f/1-Lara-Sousa.jpg",
    description:
      "Lara Sousa est une cinéaste et artiste numérique mozambicaine...",
    artworks: [
      {
        id: 11,
        title:
          "Tirem nos tudo mas deixem nos a música... Quando eu nasci era meio dia e o sol brillava ...",
        image:
          "https://i.postimg.cc/tCL5xcpm/1-Tirem-Nos-Tudo-Mas-Deixem-Nosamusica-Quandoeu-Nasci-Era-Meio-Diaeo-Sol-Brillava-regressaremos-Sombrias-Corpo.jpg",
        dimention: "-",
        creation_place: "-",
      },
      {
        id: 12,
        title: "Sementes e imagens",
        image: "https://i.postimg.cc/1XMYcrRY/2-Sementes-EImagens.jpg",
        dimention: "-",
        creation_place: "-",
      },
    ],
  },
  {
    id: 2,
    name: "Deepa Bauhadoor",
    image: "https://i.postimg.cc/rp7G9QB6/2-Deepa-Bauhadoor.jpg",
    description:
      "Née à Maurice en 1976, elle passe toute son enfance à Petite Julie dans la maison familiale et au milieu des champs de canne alentours. ...", // (la description complète ici)
    artworks: [
      {
        id: 21,
        title: "Brède chouchou",
        image: "https://i.postimg.cc/W3fxBPJw/6-Brede-Chouchou.jpg",
        dimention: "1200 x 1600",
        creation_place: "Maurice",
      },
      {
        id: 22,
        title: "Brède rave",
        image: "https://i.postimg.cc/7Z94KdXm/7-Brede-Rave.jpg",
        dimention: "1200 x 1600",
        creation_place: "Maurice",
      },
    ],
  },
  {
    id: 3,
    name: "Mahefa Dimbiniaina Randrianarivelo",
    image:
      "https://i.postimg.cc/5tWNqzs7/3-Mahefa-Dimbiniaina-Randrianarivelo.jpg",
    description:
      "Mahefa Dimbiniaina Randrianarivelo, né à Antananarivo en 1991, est un photographe surréaliste Malagasy. Commençant par le graphic design et le digital painting, il choisit d'approfondir la photographie pour s'exprimer. Inspiré par les grands noms du surréalisme : René Magritte, Claude Cahun, Man Ray, plus récemment, Erik Johansson ou Grégory Crewdson, sa principale source d'inspiration reste le cinéaste Wes Anderson. En 2022, il est le lauréat du prix Paritana, prix d'art contemporain malagasy et effectue ainsi une résidence de création d'une durée de trois mois à la Cité Internationale des Arts à Paris.",

    artworks: [
      {
        id: 31,
        title: "Analakely, Antananarivo",
        image: "https://i.postimg.cc/W1YN2xrt/11-Analakely-Antananarivo.jpg",
        dimention: "4613 x 4613",
        creation_place: "Madagascar",
      },
      {
        id: 32,
        title: "Ancienne banque de Madagascar et des Comores, Toamasina",
        image:
          "https://i.postimg.cc/mgJvp4C3/12-Ancienne-Banque-De-Madagascar-Et-Des-Comores-Toamasina.jpg",
        dimention: "-",
        creation_place: "Madagascar",
      },
    ],
  },
  {
    id: 4,
    name: "Mathilde Neri",
    image: "https://i.postimg.cc/nzcx0GBk/4-Mathilde-Neri.jpg",
    description:
      "Née en 1982 à Noyon (France), Mathilde Neri est une artiste visuelle du monde hybride et outsider qui œuvre également dans le champ de la performance. Neri explore les dimensions de réalité qui émanent de la rencontre avec le signe dans la nature, avec lequel elle entre en connexion par le médium. Elle vit et travaille à La Réunion.",
    artworks: [
      {
        id: 41,
        title: "Il ne reste plus que...",
        image: "https://i.postimg.cc/0rgSHb5R/16-Il-Ne-Reste-Plus-Que.jpg",
        dimention: "-",
        creation_place: "Réunion",
      },
      {
        id: 42,
        title: "... réalité fantomatique",
        image: "https://i.postimg.cc/7LLNzJfm/17-Realite-Fantomatique.jpg",
        dimention: "-",
        creation_place: "Réunion",
      },
    ],
  },
];

function getFavoriteArtworksFromLocalStorage() {
  return JSON.parse(localStorage.getItem("favorite_artworks")) || [];
}

function LikeContext({ children }) {
  const [favoriteArtworks, setFavoriteArtworks] = useState(
    getFavoriteArtworksFromLocalStorage()
  );

  useEffect(() => {
    localStorage.setItem("favorite_artworks", JSON.stringify(favoriteArtworks));
  }, [favoriteArtworks]);

  const contextValue = useMemo(
    () => ({ artists, favoriteArtworks, setFavoriteArtworks }),
    [favoriteArtworks]
  );

  return (
    <likeContext.Provider value={contextValue}>{children}</likeContext.Provider>
  );
}

LikeContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LikeContext;

export const useLike = () => useContext(likeContext);
