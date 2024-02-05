// FilterArtistAdmin.jsx
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useApp } from "../../context/AppContext";

export default function FilterArtistAdmin({ name, onChange }) {
  const { artistCollection } = useApp();
  const [selectedArtist, setSelectedArtist] = useState("");

  useEffect(() => {}, [selectedArtist]);

  const handleArtistChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedArtist(selectedValue);
    onChange({ target: { name, value: selectedValue } });
  };

  return (
    <div>
      <select name={name} value={selectedArtist} onChange={handleArtistChange}>
        <option value={selectedArtist.id}>Selectionner un artiste</option>
        {artistCollection?.map((artist) => (
          <option key={artist.id} value={artist.id}>
            {artist.name}
          </option>
        ))}
      </select>
    </div>
  );
}

FilterArtistAdmin.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
