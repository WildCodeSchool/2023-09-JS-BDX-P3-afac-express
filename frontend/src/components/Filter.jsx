import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import PropTypes from "prop-types";

const artists = [
  { id: 1, name: "Lara Sousa" },
  { id: 2, name: "Deepa Bauhadoor" },
  { id: 3, name: "Mahefa Dimbiniaina Randrianarivelo" },
  { id: 4, name: "Mathilde Neri" },
];

function Filter({ match }) {
  const artistId = match.params.id;
  return (
    <MDBDropdown className="d-flex justify-content-center pb-5">
      <MDBDropdownToggle
        tag="a"
        className="btn btn-primary bg-transparent text-dark"
      >
        Autres artistes {artistId}
      </MDBDropdownToggle>

      <MDBDropdownMenu>
        {artists.map((artist) => (
          <MDBDropdownItem key={artist.id} link href={`/artist/${artist.id}`}>
            {artist.name}
          </MDBDropdownItem>
        ))}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

Filter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default Filter;
