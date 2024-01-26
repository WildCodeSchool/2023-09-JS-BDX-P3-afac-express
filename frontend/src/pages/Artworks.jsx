import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import "../App.scss";
import { MDBEcommerceGallery } from "mdb-react-ecommerce-gallery";
import Art from "../components/Art";

const basicPhotos = [
  {
    thumbnail: "https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp",
    src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp",
    alt: "Test alt 1",
  },
  {
    thumbnail: "https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp",
    src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp",
    alt: "Test alt 2",
  },
  {
    thumbnail: "https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp",
    src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp",
    alt: "Test alt 3",
  },
];

function Artworks() {
  return (
    <MDBContainer fluid className="pt-5 pb-5">
      <MDBEcommerceGallery imagesSrc={basicPhotos} activation="mouseenter" />
      <h3
        className="fs-1 text text-center fw-bold pt-5 mb-6"
        style={{ color: "#7b273d" }}
      >
        Œuvre de l'artiste
      </h3>
      <Art />
    </MDBContainer>
  );
}

export default Artworks;
