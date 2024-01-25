const fs = require("fs");

const AbstractManager = require("./AbstractManager");
// const { url } = require("inspector");

class UploadManager extends AbstractManager {
  constructor() {
    super({ table: "upload" });
  }

  create(data) {
    // let filename = data.destination.replace("public/", "");

    const name = `${data.path}.${data.filename.split(".").slice(-1)}`;

    return new Promise((resolve, reject) => {
      fs.rename(`${data.path}`, name, async (err) => {
        if (err) {
          reject(err);
        }
        const [result] = await this.database.query(
          `INSERT INTO ${this.table} (url) VALUES (?)`,
          [name]
        );

        resolve({
          id: result.insertId,
          url: name,
        });
      });
    });
  }
}

module.exports = UploadManager;
