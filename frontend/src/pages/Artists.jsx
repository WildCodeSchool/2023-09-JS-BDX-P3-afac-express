import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useState } from "react";
import FilterArtist from "../components/Filter/FilterArtist";
import { useApp } from "../context/AppContext";

function Artists() {
  const { artistCollection } = useApp();
  const [selectedArtist, setSelectedArtist] = useState(null);

  const onSelectArtist = (artist) => {
    setSelectedArtist(artist);
  };

  return (
    <MDBContainer fluid className="pt-5 mb-7">
      <h3
        className="fs-1 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Les artistes
      </h3>

      <FilterArtist
        artists={artistCollection}
        onSelectArtist={onSelectArtist}
      />

      {selectedArtist && (
        <div key={selectedArtist.id}>
          <MDBCard>
            <MDBRow>
              <MDBCol>
                <MDBCardImage
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>
                    <h3 className="fs-2 text-center">{selectedArtist.name}</h3>
                  </MDBCardTitle>
                  <MDBCardText>{selectedArtist.description}</MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>
      )}
    </MDBContainer>
  );
}

export default Artists;
