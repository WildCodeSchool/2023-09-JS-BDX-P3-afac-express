const AbstractManager = require("./AbstractManager");

class ArtworkManager extends AbstractManager {
  constructor() {
    super({ table: "artwork" });
  }

  findArtwork() {
    return this.database
      .query(`SELECT artwork.id, artwork.title, artwork.image, artwork.dimension, artwork.creation_place, artist.id AS artist_id, artist.name AS artist_name
      FROM artwork
      JOIN artist ON artwork.artist_id = artist.id;`);
  }

  create(artwork) {
    return this.database.query(
      `insert into ${this.table} (title, image, dimension, creation_place, artist_id) values (?, ?, ?, ?, ?)`,
      [
        artwork.title,
        artwork.image,
        artwork.dimension,
        artwork.creation_place,
        artwork.artist_id,
      ]
    );
  }
}
module.exports = ArtworkManager;
