const fs = require("fs");
const path = require("path");

const AbstractManager = require("./AbstractManager");

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

  async delete(id) {
    // Get the image URL from the database before deleting the record
    const [result] = await this.find(id);
    // console.log("upload delete result", result);

    if (result && result.length > 0) {
      const imagePath = `public/${result[0].url}`;
      const filePath = path.resolve(imagePath);
      // Delete the image file from the public folder
      await new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
          if (err) {
            reject(err);
          }

          resolve();
        });
      });
      // Delete the record from the database
      await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
  }
}

module.exports = UploadManager;
