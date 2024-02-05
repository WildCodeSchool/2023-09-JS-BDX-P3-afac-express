const AbstractManager = require("./AbstractManager");
const UploadManager = require("./UploadManager");

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

  async delete(id) {
    const [result] = await this.find(id);

    if (!result?.length) {
      throw new Error("artist not found");
    }

    const artistImage = result[0].image;

    if (artistImage) {
      const [uploadDB] = await this.database.query(
        `select id from upload where url like concat('%', ?)`,
        artistImage.split("/").pop()
      );

      if (uploadDB?.length) {
        const uploadManager = new UploadManager();
        uploadManager.setDatabase(this.database);
        await uploadManager.delete(uploadDB[0].id);
      }
    }

    await super.delete(id);
  }
}

module.exports = ArtistManager;
