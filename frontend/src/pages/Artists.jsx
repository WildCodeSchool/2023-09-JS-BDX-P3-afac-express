import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBRipple,
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

      {selectedArtist ? (
        <div key={selectedArtist.id}>
          <h3 className="fs-4 text text-center pt-2 mb-4">
            {selectedArtist.name}
          </h3>
          <MDBCard key={selectedArtist.id}>
            <MDBCardImage
              src={selectedArtist.image}
              fluid
              alt={selectedArtist.name}
            />

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
                className="col-15 m-auto container-image"
                shadow="5"
                key={artist.id}
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay rounded "
                  onClick={() => onSelectArtist(artist)}
                >
                  <div className="bg-image hover-zoom ">
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
