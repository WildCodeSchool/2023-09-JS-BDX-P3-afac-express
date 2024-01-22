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
    // Vérifie si l'œuvre existe déjà pour cet utilisateur
    const checkDuplicateQuery = `
      SELECT *
      FROM artwork_users
      WHERE users_id = ? AND artwork_id = ?
    `;

    return this.database
      .query(checkDuplicateQuery, [userId, artworkId])
      .then((existingArtwork) => {
        if (existingArtwork.length > 0) {
          console.info("L'œuvre existe déjà pour cet utilisateur");
          return null;
        }
        const insertQuery = `
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

        return this.database.query(insertQuery, [
          artworkId,
          artistId,
          userId,
          artistName,
          artworkTitle,
          artworkImage,
        ]);
      })
      .then(async (result) => {
        if (result !== null) {
          const artworks = await this.findArtworkForUser(userId);
          return artworks;
        }
        return null;
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
      LIMIT 1;
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
  // findArtworkById(artworkId) {
  //   const sqlQuery = `
  //     SELECT
  //       artwork_id AS artworkId,
  //       artist_id AS artistId,
  //       users_id AS userId,
  //       artist_name AS artistName,
  //       artwork_title AS artworkTitle,
  //       artwork_image AS artworkImage
  //     FROM artwork_users
  //     WHERE artwork_id = ?
  //     LIMIT 1;
  //   `;

  //   return this.database
  //     .query(sqlQuery, [artworkId])
  //     .then((result) => {
  //       const artwork = result[0];
  //       // console.log("Artwork result:", artwork);
  //       if (artwork) {
  //         return artwork;
  //       }
  //       return null;
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // }

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
