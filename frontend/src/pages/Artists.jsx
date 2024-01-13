import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
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
    <MDBContainer fluid className="pt-5 mb-7" responsive>
      <h3
        className="fs-1 text text-center fw-bold pt-5"
        style={{ color: "#7b273d" }}
      >
        Nos artistes
      </h3>

      <FilterArtist
        artists={artistCollection}
        onSelectArtist={onSelectArtist}
      />

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
