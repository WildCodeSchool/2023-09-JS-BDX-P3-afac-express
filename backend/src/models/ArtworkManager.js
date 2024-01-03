const AbstractManager = require("./AbstractManager");

class ArtworkManager extends AbstractManager {
  constructor() {
    super({ table: "artwork" });
  }

  create(user) {
    return this.database.query(
      `insert into ${this.table} (title, image, dimension, creation_place, artist_id) values (?, ?, ?, ?, ?)`,
      [
        user.title,
        user.image,
        user.dimension,
        user.creation_place,
        user.artist_id,
      ]
    );
  }
}
module.exports = ArtworkManager;
