import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";

function ArtworksFilter() {
  const { artistCollection } = useApp();

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
          <MDBDropdownItem key={artist.id}>
            <Link to={`/artworks/${artist.id}`}>{artist.name}</Link>
          </MDBDropdownItem>
        ))}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default ArtworksFilter;
