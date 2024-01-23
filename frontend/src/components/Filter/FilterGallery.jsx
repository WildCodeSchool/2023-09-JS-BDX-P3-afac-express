import {
  MDBBtn,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import { useApp } from "../../context/AppContext";

function FilterGallery({ onSelectArtist }) {
  const { artistCollection, artCollection } = useApp();

  const handleSelectArtist = (artist) => {
    onSelectArtist(artist, artCollection);
  };

  const handleSelectAllArtist = () => {
    onSelectArtist(null); // Passer null ou une valeur appropriée selon vos besoins.
  };
  return (
    <MDBDropdown className="d-flex justify-content-center pb-4 pt-3">
      <MDBDropdownToggle
        tag="a"
        className="btn btn-primary bg-transparent text-dark"
      >
        Sélectionner
      </MDBDropdownToggle>

      <MDBDropdownMenu>
        <MDBDropdownItem className="d-grid gap-2">
          <MDBBtn onClick={() => handleSelectAllArtist()}>
            Tous les Artistes
          </MDBBtn>
        </MDBDropdownItem>
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
FilterGallery.propTypes = {
  onSelectArtist: PropTypes.func.isRequired,
};

export default FilterGallery;
