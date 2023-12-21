import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ArtworksFilter({ artworks, onSelectArtist }) {
  return (
    <MDBDropdown className="d-flex justify-content-center pb-4 pt-3">
      <MDBDropdownToggle
        tag="a"
        className="btn btn-primary bg-transparent text-dark"
      >
        Autres artistes
      </MDBDropdownToggle>

      <MDBDropdownMenu>
        {artworks.map((artwork) => (
          <MDBDropdownItem key={artwork.artist.id}>
            <Link
              to={`/artworks/${artwork.artist.id}`}
              onClick={() => onSelectArtist(artwork.artist)}
            >
              {artwork.artist.name}
            </Link>
          </MDBDropdownItem>
        ))}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

ArtworksFilter.propTypes = {
  artworks: PropTypes.arrayOf(
    PropTypes.shape({
      artist: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  onSelectArtist: PropTypes.func.isRequired,
};

export default ArtworksFilter;
