import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBContainer,
  MDBRow,
  MDBCol,
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
        Nos artistes
      </h3>

      <FilterArtist
        artists={artistCollection}
        onSelectArtist={onSelectArtist}
      />

      {selectedArtist ? (
        <div key={selectedArtist.id}>
          <h3 className="fs-4 text text-center pt-2">{selectedArtist.name}</h3>

          <MDBCard
            alignment="center"
            className="col-8 m-auto"
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
                  className="rounded img-fluid"
                />
              </div>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardText className="text-start">
                {selectedArtist.description}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      ) : (
        <MDBRow>
          {artistCollection.map((artist) => (
            <MDBCol key={artist.id}>
              <h3 className="fs-4 text text-center pt-2 pb-3">{artist.name}</h3>

              <MDBCard
                alignment="center"
                className="col-15 m-auto"
                shadow="5"
                key={artist.id}
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                  onClick={() => onSelectArtist(artist)}
                >
                  <div className="bg-image hover-zoom">
                    <MDBCardImage
                      src={artist.image}
                      fluid
                      alt={artist.name}
                      className=" img-fluid"
                    />
                  </div>
                </MDBRipple>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      )}
    </MDBContainer>
  );
}

export default Artists;
