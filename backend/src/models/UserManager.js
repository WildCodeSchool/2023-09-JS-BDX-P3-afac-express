const bcrypt = require("bcrypt");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  create(user) {
    return new Promise((resolve, reject) => {
      if (!user.password || typeof user.password !== "string") {
        reject(new Error("Invalid password"));
        return;
      }

      UserManager.hashPassword(user.password)
        .then((hash) => {
          return this.database.query(
            `insert into ${this.table} (firstname, lastname, email, password, is_admin) values (?, ?, ?, ?, ?)`,
            [user.firstname, user.lastname, user.email, hash, user.is_admin]
          );
        })
        .then((result) => {
          resolve({
            id: result.insertId,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            is_admin: user.is_admin,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async login({ email, password }) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email like ?`,
      [email]
    );

    if (!rows.length) {
      return undefined;
    }

    const user = rows[0];
    // console.log(user);

    const result = await bcrypt.compare(password, user.password);
    // console.log(result);

    return result ? user : undefined;
  }

  static hashPassword(password, workFactor = 5) {
    return bcrypt.hash(password, workFactor);
  }
}

module.exports = UserManager;
