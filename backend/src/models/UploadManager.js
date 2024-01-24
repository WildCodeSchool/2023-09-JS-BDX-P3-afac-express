/* const fs = require("fs");
const AbstractManager = require("./AbstractManager");

class UploadArtistManager extends AbstractManager {
  constructor() {
    super({ table: "artist" });
  }

  create(data) {
    const name = `${data.path}.${data.filename.split(".").slice(-1)}`;

    return new Promise((resolve, reject) => {
      fs.rename(`${data.path}`, name, async (err) => {
        if (err) {
          reject(err);
        }

        const [result] = await this.database.query(
          `INSERT INTO ${this.table} (image) VALUES (?)`,
          [result]
        );

        resolve({
          image: name,
        });
      });
    });
  }
}

module.exports = UploadArtistManager; */
