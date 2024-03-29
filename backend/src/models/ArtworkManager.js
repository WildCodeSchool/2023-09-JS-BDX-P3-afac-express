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

  findArtworkById(id) {
    return this.database.query(
      `
      SELECT artwork.id, artwork.title, artwork.image, artwork.dimension, artwork.creation_place, artwork.artist_id, artist.name AS artist_name
      FROM artwork
      LEFT JOIN artist ON artwork.artist_id = artist.id
      WHERE artwork.id = ?
    `,
      [id]
    );
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
      .then(async () => {
        const artworks = await this.findArtworkForUser(userId);
        return artworks;
      })
      .catch((error) => {
        throw error;
      });
  }

  findArtworkForUser(userId) {
    const sqlQuery = `
      SELECT
        artwork_id AS artworkId,
        artist_id AS artistId,
        users_id AS userId,
        artist_name AS artistName,
        artwork_title AS artworkTitle,
        artwork_image AS artworkImage
      FROM artwork_users
      WHERE users_id = ?
    `;

    return this.database
      .query(sqlQuery, [userId])
      .then((result) => {
        const artwork = result[0];
        if (artwork) {
          return artwork;
        }
        return null;
      })
      .catch((error) => {
        throw error;
      });
  }

  deleteArtworkForUser(userId, artworkId) {
    const sqlQuery = `
      DELETE FROM artwork_users
      WHERE users_id = ? AND artwork_id = ?;
    `;

    return this.database.query(sqlQuery, [userId, artworkId]).catch((error) => {
      throw error;
    });
  }

  create(artwork) {
    return this.database.query(
      `insert into ${this.table} (title, dimension, creation_place, artist_id) values (?, ?, ?, ?);`,
      [
        artwork.title,
        artwork.dimension,
        artwork.creation_place,
        artwork.artist_id,
      ]
    );
  }

  async addAvatarArtwork(artworkId, uploadUrl) {
    return this.database.query(
      `UPDATE ${this.table} SET image = ? WHERE id = ?`,
      [uploadUrl, artworkId]
    );
  }
}

module.exports = ArtworkManager;
