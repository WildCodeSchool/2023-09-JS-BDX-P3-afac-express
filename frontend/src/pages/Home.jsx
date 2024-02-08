import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "../style/Home.scss";
import { useApp } from "../context/AppContext";

function Home() {
  const { artistCollection, artCollection } = useApp();

  return (
    <MDBContainer fluid className="pt-5 text-center">
      <MDBCard className="card-custom mt-5">
        <MDBCardBody>
          <MDBCardTitle className="h1 pb-3 mt-2">
            Bienvenue sur notre musée interactif
          </MDBCardTitle>
          <MDBCardText>
            Plongez dans un voyage fascinant à travers les riches traditions
            artistiques et le patrimoine culturel diversifié de cette région
            exotique.
          </MDBCardText>
          <MDBCardText>
            Notre plateforme est une passerelle vers un monde d'inspiration, où
            vous pourrez explorer les œuvres captivantes d'artistes émergents et
            établis. Que vous soyez passionné par la peinture, la sculpture, la
            musique, la danse ou tout autre forme d'expression artistique, vous
            trouverez ici une source inépuisable d'émerveillement et
            d'enrichissement culturel.
          </MDBCardText>

          <MDBBtn className="btn">
            <Link to="/About" className="nav-link navLink">
              À propos
            </Link>
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <h2 className="mt-5" style={{ color: "#7b273d" }}>
        Artistes
      </h2>

      <MDBCarousel className="mt-3" showControls showIndicators>
        {artistCollection && artistCollection.length > 0 ? (
          artistCollection.map((artist) => (
            <MDBCarouselItem itemId={artist.id} key={artist.id}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle className="text-center mb-0 fw-bold fs-4">
                    {artist.name}
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
              <img
                src={artist.image}
                className="d-block w-50 mx-auto"
                alt={artist.name}
              />
            </MDBCarouselItem>
          ))
        ) : (
          <p>Aucun artiste disponible.</p>
        )}
      </MDBCarousel>

      <h2 className="mt-5" style={{ color: "#7b273d" }}>
        Collections
      </h2>
      <p className="text-left">
        "Regarder le monde c'est toucher sa diversité".
      </p>

      <MDBCarousel className="mt-3 mb-5" showControls showIndicators>
        {artCollection && artCollection.length > 0 ? (
          artCollection.map((art) => (
            <MDBCarouselItem itemId={art.id} key={art.id}>
              <img src={art.image} alt={art.title} />
              <MDBCarouselCaption className="carousel-description">
                <p>{art.artist_name}</p>
              </MDBCarouselCaption>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle className="text-center mb-0 fst-italic fw-bold">
                    {art.title}
                  </MDBCardTitle>
                  <MDBCardTitle className="text-center mb-0 fs-6">
                    {art.artist_name}
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCarouselItem>
          ))
        ) : (
          <p>Aucune œuvre disponible.</p>
        )}
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Home;
