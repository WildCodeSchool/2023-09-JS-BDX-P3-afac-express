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

  addArtworkForUser(
    artworkId,
    artistId,
    userId,
    artistName,
    artworkTitle,
    artworkImage
  ) {
    const sqlQuery = `
      INSERT INTO artwork_users (
        artwork_id,
        artist_id,
        users_id,
        artist_name,
        artwork_title,
        artwork_image
      )
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    return this.database
      .query(sqlQuery, [
        artworkId,
        artistId,
        userId,
        artistName,
        artworkTitle,
        artworkImage,
      ])
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  }

  findArtworkForUser(
    artworkId,
    artistId,
    userId,
    artistName,
    artworkTitle,
    artworkImage
  ) {
    const sqlQuery = `
    SELECT
    artwork_id AS artworkId,
    artist_id AS artistId,
    users_id AS userId,
    artist_name AS artistName,
    artwork_title AS artworkTitle,
    artwork_image AS artworkImage
  FROM artwork_users
  WHERE
  (? IS NULL OR artwork_id = ?)
    AND (? IS NULL OR artist_id = ?)
    AND (? IS NULL OR users_id = ?)
    AND (? IS NULL OR artist_name LIKE ?)
    AND (? IS NULL OR artwork_title LIKE ?)
    AND (? IS NULL OR artwork_image LIKE ?)
    `;
    return this.database
      .query(sqlQuery, [
        artworkId,
        artworkId,
        artistId,
        artistId,
        userId,
        userId,
        artistName,
        `%${artistName}%`,
        artworkTitle,
        `%${artworkTitle}%`,
        artworkImage,
        `%${artworkImage}%`,
      ])
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  }

  create(artwork) {
    return this.database.query(
      `insert into ${this.table} (title, image, dimension, creation_place, artist_id) values (?, ?, ?, ?, ?);`,
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
