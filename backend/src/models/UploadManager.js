const fs = require("fs");

const AbstractManager = require("./AbstractManager");
// const { url } = require("inspector");

class UploadManager extends AbstractManager {
  constructor() {
    super({ table: "upload" });
  }

  create(data) {
    const fileExtension = data.originalname.split(".").slice(-1);
    const name = `${data.destination.replace("public/", "")}${
      data.filename
    }.${fileExtension}`;

    return new Promise((resolve, reject) => {
      fs.rename(
        `${data.path}`,
        `${data.path}.${fileExtension}`,
        async (err) => {
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
        }
      );
    });
  }
}

module.exports = UploadManager;
