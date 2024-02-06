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

  async delete(id) {
    // Get the image URL from the database before deleting the record
    const [result] = await this.find(id);
    // console.log("upload delete result", result);

    if (result && result.length > 0) {
      const imagePath = `public/${result[0].url}`;
      // console.log(path.resolve(imagePath));
      try {
        // Delete the image file from the public folder
        fs.unlink(imagePath);
      } catch (err) {
        console.error(`Error deleting file: ${imagePath}`, err);
      }
    }
    // Delete the record from the database
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = UploadManager;
