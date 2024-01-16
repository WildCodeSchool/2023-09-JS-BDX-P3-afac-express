import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { useApp } from "../context/AppContext";
import FilterArtworks from "../components/Filter/FilterArtworks";

function Artworks() {
  const { artCollection } = useApp();

  return (
    <MDBContainer fluid className="pt-5 pb-5">
      <h3
        className="fs-1 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Patrimoine iconographique de l'océan indien
      </h3>

      <FilterArtworks />

      {artCollection?.length && (
        <MDBCarousel showControls interval={10000}>
          {artCollection.map((art, index) => (
            <MDBCarouselItem key={art.id} id={index + 1}>
              <img src={art.image} className="d-block w-100" alt={art.title} />
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle
                    className="fst-italic text-center fs-5"
                    style={{ color: "#7b273d" }}
                  >
                    {art.title}
                  </MDBCardTitle>
                  <MDBCardText className="text-center lh-sm">
                    <h3 className="fs-3 text text-center pt-2 fw-bold pb-2">
                      {art.artist_name}
                    </h3>
                    {art.dimension && (
                      <span>
                        {art.dimension}
                        <br />
                      </span>
                    )}
                    {art.creation_place && <span>{art.creation_place}</span>}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCarouselItem>
          ))}
        </MDBCarousel>
      )}

      {!artCollection?.length && <p>Les données ne sont pas disponibles.</p>}
    </MDBContainer>
  );
}

export default Artworks;
