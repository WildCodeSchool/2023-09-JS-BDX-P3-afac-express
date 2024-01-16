import {
  MDBBtn,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import { useApp } from "../../context/AppContext";

function FilterUser({ onSelectArtist }) {
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
        Autres artistes
      </MDBDropdownToggle>

      <MDBDropdownMenu>
        {artistCollection.map((artist) => (
          <MDBDropdownItem key={artist.id} className="d-grid gap-2">
            <MDBBtn onClick={() => handleSelectArtist(artist)}>
              {artist.name}
            </MDBBtn>
          </MDBDropdownItem>
        ))}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

FilterUser.propTypes = {
  onSelectArtist: PropTypes.func.isRequired,
};

export default FilterUser;
