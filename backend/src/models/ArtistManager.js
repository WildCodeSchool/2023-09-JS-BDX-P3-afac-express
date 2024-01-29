const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  constructor() {
    super({ table: "artist" });
  }

  create(artist) {
    return this.database.query(
      `insert into ${this.table} (name, description) values (?,?)`,
      [artist.name, artist.description]
    );
  }

  async addAvatarArtist(artistId, uploadUrl) {
    return this.database.query(
      `UPDATE ${this.table} SET image = ? WHERE id = ?`,
      [uploadUrl, artistId]
    );
  }
}

module.exports = ArtistManager;
