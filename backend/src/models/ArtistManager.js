const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  constructor() {
    super({ table: "artists" });
  }

  create(artist) {
    return this.database.query(
      `insert into ${this.table} (name, description) values (?, ?)`,
      [artist.name, artist.description]
    );
  }
}

module.exports = ArtistManager;
