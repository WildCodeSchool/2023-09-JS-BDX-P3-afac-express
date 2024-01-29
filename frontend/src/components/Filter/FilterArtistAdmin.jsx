import React from "react";
import { useApp } from "../../context/AppContext";

export default function FilterArtistAdmin() {
  const { artistCollection } = useApp();

  return (
    <div>
      <select>
        {artistCollection.map((artist) => (
          <option key={artist.id} value={artist.id}>
            {artist.name}
          </option>
        ))}
      </select>
    </div>
  );
}
