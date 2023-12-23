import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Filter({ artists, onSelectArtist }) {
  return (
    <MDBDropdown className="d-flex justify-content-center pb-4 pt-3">
      <MDBDropdownToggle
        tag="a"
        className="btn btn-primary bg-transparent text-dark"
      >
        Autres artistes
      </MDBDropdownToggle>

      <MDBDropdownMenu>
        {artists.map((artist) => (
          <MDBDropdownItem key={artist.id}>
            <Link
              to={`/user/${artist.id}`}
              onClick={() => onSelectArtist(artist)}
            >
              {artist.name}
            </Link>
          </MDBDropdownItem>
        ))}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

Filter.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectArtist: PropTypes.func.isRequired,
};

export default Filter;
