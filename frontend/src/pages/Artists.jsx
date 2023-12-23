import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useState } from "react";
import Filter from "../components/Filter/Filter";

const artists = [
  {
    id: 1,
    name: "Lara Sousa",
    image: "https://i.postimg.cc/13kZ1Z6f/1-Lara-Sousa.jpg",
    description:
      "Lara Sousa est une cinéaste et artiste numérique mozambicaine. Elle est également conteuse. Le choix de sa profession n'est pas surprenant puisqu'elle est la descendante de la poétesse Noémia de Sousa. Née en 1926, Noémia de Sousa était poète et rédactrice en chef de journal ; jeune femme, elle a utilisé le contexte de répression politique comme stimulant pour écrire, dans lequel elle était farouchement critique, ce qui lui a valu d'être emprisonnée au Mozambique, puis de s'exiler. Aujourd'hui, on se souvient d'elle comme de l'un des plus importants poètes du Mozambique pour sa contribution à la lutte de libération du pays. Suivant les traces de sa grand-tante en matière d'expression artistique, Lara laisse sa marque avec son film Fin et sa pseudo-suite, Kalunga. Le visionnage des films est une expérience sensorielle et évocatrice, d'autant plus que les spectateurs se rendent compte qu'ils sont en train de dialoguer les uns avec les autres. Le travail de Lara s'engage dans des récits provenant d'un pays qui est encore en train d'accepter son identité passée et présente. Les questions liées à la décolonialité, au traumatisme, à l'hybridité, à la mort, à l'utopie et à la mer résonnent dans les histoires que Lara raconte. Consciente que les récits individuels ont été réduits au silence tout au long de l'histoire du Mozambique, Lara cherche à placer le sujet au centre de ses propres choix. En se concentrant sur les non-lieux où ces récits individuels existent, elle crée un espace imaginaire entre le passé, le présent et le futur où les désirs subjectifs peuvent émerger, comme un acte poétique pour ne pas laisser mourir les expériences subjectives.",
  },
  {
    id: 2,
    name: "Deepa Bauhadoor",
    image: "https://i.postimg.cc/rp7G9QB6/2-Deepa-Bauhadoor.jpg",

    description:
      "Née à Maurice en 1976, elle passe toute son enfance à Petite Julie dans la maison familiale et au milieu des champs de canne alentours. Après avoir passé son H.S.C., elle se rend en Inde afin d’y étudier l’Art, sa passion. Elle obtient brillamment un Bachelor of Fine Arts à Hyderabad et en profite pour visiter la Grande Péninsule et apprendre et pratiquer télégou et hindi. En Inde, en 1999, elle participe déjà à de nombreuses expositions de groupes, notamment à la Potti Sree Ramulu Telugu University d’Hyderabad. De retour dans son île natale, elle y devient Educator en Art & Design. Puis elle décide de poursuivre et compléter ses études en passant un Post Graduate Certificate in Education du Mauritius Institute of Education (MIE). Enfin, par passion pour la photographie, elle obtient un Advance Certificate in Photography (MQA approved). Elle enchaîne alors les expositions et manifestations culturelles, Exposition organisée par l’ACA à la Galerie Malcom de Chazal, ou le 3e Salon d’été en mars 1999, le Salon de mai en 2010, deux Salons auxquels elle ne cessera de participer chaque année. En 2012, elle expose huit toiles à la Galerie Amrita Dyalah de Grand-Baie. La même année, elle réalise sa première exposition en solo à New-Delhi intitulée BENEATH THE BLUE. En 2013, elle prend part à la 12e Convention internationale GOPIO en participant à une exposition collective au Mahatma Gandhi Institute de Moka. Elle se produit alors dans une exposition de groupe en Chine, local culture, à Chengdu et Dujiangyan organisée par le Chengdu Municipal Foreign Affairs Office (FAO), Chengdu Literary and Art Federation and ACA. Le 13 juin 2013, à Bangkok en Thaïlande, elle obtient le prestigieux GLORY OF INDIA AWARD de l’IIFS (India International Friendship Society). Distinction qu’elle reçoit de l’ancien Député-Premier Ministre de Thaïlande, son Excellence KORN DABBARANSI. La même année, le 17 décembre, elle remporte la médaille d’argent de la Fédération du Tourisme au Coral Azur Beach Resort de Mon Choisy. En 2014, elle participe à la manifestation, GLORIES OF BIHAR ART EXHIBITION destinée à marquer le 180e Anniversaire de l’arrivée des travailleurs engagés à Maurice. Puis ce sera une exposition au Rabindranath Tagore Institute. Par la suite, elle se rend plusieurs fois en Chine pour participer à diverses expositions internationales et y représenter son pays d’origine, Maurice. Notamment la prestigieuse 6th Beijing International Art Biennale, au National Art Museum of China. En Italie, elle prend part à une exposition d’Art et de poésie à Bologne. En tant que photographe, elle participe souvent aux expositions du Cercle des Artistes Photographes. En 2017, elle expose une œuvre grand format dans l’événement Porlwi by night- Femmes coupeuses de cannes à sucre. Elle pratique toutes sortes de techniques et régulièrement l’aquarelle en exposant également au sein de l’International Water Colour society (IWS). Elle participe au groupe Partage lors de l’exposition à l’Institut Francais de Maurice en avril 2017.",
  },
  {
    id: 3,
    name: "Mahefa Dimbiniaina Randrianarivelo",
    image:
      "https://i.postimg.cc/5tWNqzs7/3-Mahefa-Dimbiniaina-Randrianarivelo.jpg",
    description:
      "Mahefa Dimbiniaina Randrianarivelo, né à Antananarivo en 1991, est un photographe surréaliste Malagasy. Commençant par le graphic design et le digital painting, il choisit d'approfondir la photographie pour s'exprimer. Inspiré par les grands noms du surréalisme : René Magritte, Claude Cahun, Man Ray, plus récemment, Erik Johansson ou Grégory Crewdson, sa principale source d'inspiration reste le cinéaste Wes Anderson. En 2022, il est le lauréat du prix Paritana, prix d'art contemporain malagasy et effectue ainsi une résidence de création d'une durée de trois mois à la Cité Internationale des Arts à Paris.",
  },
  {
    id: 4,
    name: "Mathilde Neri",
    image: "https://i.postimg.cc/nzcx0GBk/4-Mathilde-Neri.jpg",
    description:
      "Née en 1982 à Noyon (France), Mathilde Neri est une artiste visuelle du monde hybride et outsider qui œuvre également dans le champ de la performance. Neri explore les dimensions de réalité qui émanent de la rencontre avec le signe dans la nature, avec lequel elle entre en connexion par le médium. Elle vit et travaille à La Réunion.",
  },
];

function Artists() {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const onSelectArtist = (artist) => {
    setSelectedArtist(artist);
  };

  return (
    <MDBContainer fluid className="pt-5">
      <h3
        className="fs-1 text text-center fw-bold pt-5 text-uppercase"
        style={{ color: "#7b273d" }}
      >
        Nos artistes
      </h3>

      <Filter artists={artists} onSelectArtist={onSelectArtist} />
      {selectedArtist && (
        <div key={selectedArtist.id}>
          <h3 className="fs-4 text text-center pt-2">{selectedArtist.name}</h3>

          <MDBCard
            alignment="center"
            className="col-10 m-auto"
            shadow="5"
            key={selectedArtist.id}
          >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <div className="bg-image hover-zoom">
                <MDBCardImage
                  src={selectedArtist.image}
                  fluid
                  alt={selectedArtist.name}
                  class="rounded img-fluid"
                />
              </div>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardText className="p-5 text-start">
                {selectedArtist.description}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      )}
    </MDBContainer>
  );
}

export default Artists;
