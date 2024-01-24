import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useApp } from "../context/AppContext";

function Art() {
  const { artCollection } = useApp();

  return (
    <div>
      {artCollection?.length > 0 &&
        artCollection.map((art, index) => (
          <MDBCard key={art.id} id={index + 1}>
            <MDBCardImage src={art.image} position="top" alt={art.title} />
            <MDBCardBody>
              <MDBCardTitle
                className="fst-italic text-center fs-5"
                style={{ color: "#7b273d" }}
              >
                {art.title}
              </MDBCardTitle>
              <MDBCardText className="text-center lh-sm">
                <h3 className="fs-6 text text-center fw-bold pt-2 pb-2">
                  {art.artist_name}
                </h3>
                {art.dimension && (
                  <span style={{ color: "#786996" }}>
                    {art.dimension}
                    <br />
                  </span>
                )}
                {art.creation_place && (
                  <span style={{ color: "#786996" }}>{art.creation_place}</span>
                )}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        ))}

      {!artCollection?.length && <p>Les données ne sont pas disponibles.</p>}
    </div>
  );
}

export default Art;
