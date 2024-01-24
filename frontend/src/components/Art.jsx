import {
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Art() {
  const { id } = useParams();
  const { artCollection } = useApp();

  const artwork = artCollection.find((art) => art.id === parseInt(id, 10));

  if (!artwork) {
    return <p>Œuvre d'art non trouvée</p>;
  }

  return (
    <MDBContainer fluid>
      <div className="d-flex align-items-start bg-body-tertiary">
        <MDBCol>
          <img
            src={artwork.image}
            className="img-fluid hover-shadow"
            alt={artwork.id}
          />
        </MDBCol>
        <MDBCol>
          <MDBListGroup className="ps-5" style={{ minWidthL: "22rem" }} light>
            <h3 className="fw-bold">{artwork.title}</h3>
            <h5 className="mt-1 fst-italic">{artwork.artist_name}</h5>
            <MDBListGroupItem>
              {artwork.dimension && (
                <div
                  className="d-flex align-items-start bg-body-tertiary mt-3"
                  style={{ height: "20px" }}
                >
                  <MDBCol className="fw-bold">Dimension</MDBCol>
                  <MDBCol>{artwork.dimension}</MDBCol>
                </div>
              )}
            </MDBListGroupItem>
            <MDBListGroupItem>
              {artwork.creationPlace && (
                <div className="d-flex align-items-start bg-body-tertiary">
                  <MDBCol className="fw-bold">Lieu de création</MDBCol>
                  <MDBCol>{artwork.creationPlace}</MDBCol>
                </div>
              )}
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
      </div>
    </MDBContainer>
  );
}

export default Art;
