import {
  MDBBtn,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import { useApp } from "../../context/AppContext";

function FilterArtist({ onSelectArtist }) {
  const { artistCollection, artCollection } = useApp();

  const handleSelectArtist = (artist) => {
    onSelectArtist(artist, artCollection);
  };

  return (
    <MDBDropdown className="d-flex justify-content-center pb-4 pt-3">
      <MDBDropdownToggle
        tag="a"
        className="btn btn-primary bg-transparent text-dark"
      >
        Tous les artistes
      </MDBDropdownToggle>

      <MDBDropdownMenu>
        {artistCollection.map((artist) => (
          <MDBDropdownItem key={artist.id} className="d-grid gap-2">
            <MDBBtn
              to={`/artist/${artist.id}`}
              onClick={() => handleSelectArtist(artist)}
              className="navLink"
            >
              {artist.name}
            </MDBBtn>
          </MDBDropdownItem>
        ))}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

FilterArtist.propTypes = {
  onSelectArtist: PropTypes.func.isRequired,
};

export default FilterArtist;
