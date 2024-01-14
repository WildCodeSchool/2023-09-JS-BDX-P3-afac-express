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

  addArtworkForUser(artworkId, userId) {
    return this.database.query(
      `
      INSERT INTO artwork_users (
        artwork_id,
        users_id,
        artist_id,
        artist_name,
        artwork_title,
        artwork_image
      )
      SELECT
        ?, -- artwork_id
        ?, -- users_id
        artist.id AS artist_id,
        artist.name AS artist_name,
        artwork.title AS artwork_title,
        artwork.image AS artwork_image
      FROM
        artwork
        JOIN artist ON artwork.artist_id = artist.id
      WHERE
        artwork.id = ?;
      `,
      [artworkId, userId, artworkId]
    );
  }

  findArtworkByUserId(userId) {
    return this.database.query(
      `
      SELECT
        artwork_users.artwork_id,
        artwork_users.users_id,
        artwork_users.artist_id,
        artwork_users.artist_name,
        artwork_users.artwork_title,
        artwork_users.artwork_image
      FROM
        artwork_users
      WHERE
        artwork_users.users_id = ?;
      `,
      [userId]
    );
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

  createForArtworkUser(artworkData) {
    return this.database.query(
      `
      INSERT INTO artwork_users (
        artwork_id,
        users_id,
        artist_id,
        artist_name,
        artwork_title,
        artwork_image
      )
      SELECT
        NULL, -- auto-incremented artwork_id
        ?, -- users_id
        artist.id AS artist_id,
        artist.name AS artist_name,
        ?, -- artwork_title
        ?  -- artwork_image
      FROM
        artist
      WHERE
        artist.id = ?;
      `,
      [
        artworkData.userId,
        artworkData.title,
        artworkData.image,
        artworkData.artist_id,
      ]
    );
  }
}

module.exports = ArtworkManager;
