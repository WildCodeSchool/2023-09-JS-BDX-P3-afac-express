const bcrypt = require("bcrypt");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  create(user) {
    return new Promise((resolve, reject) => {
      if (!user.firstname || !user.lastname || !user.email || !user.password) {
        reject(new Error("Missing required fields"));
        return;
      }

      UserManager.hashPassword(user.password)
        .then((hash) => {
          return this.database.query(
            `insert into ${this.table} (firstname, lastname, email, hashedPassword, is_admin, secret_question, secret_answer) values (?, ?, ?, ?, ?, ?, ?)`,
            [
              user.firstname,
              user.lastname,
              user.email,
              hash,
              user.is_admin,
              user.secret_question,
              user.secret_answer,
            ]
          );
        })
        .then((result) => {
          resolve({
            id: result.insertId,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            hashedPassword: user.hashedPassword,
            is_admin: user.is_admin,
            secret_question: user.secret_question,
            secret_answer: user.secret_answer,
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

  getProfile(id) {
    return this.database.query(
      `SELECT id, email, firstname, lastname, is_admin FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  async getUserByEmail(email) {
    console.error("manag");

    try {
      const [rows] = await this.database.query(
        `SELECT * FROM ${this.table} WHERE email = ?`,
        [email]
      );

      if (rows.length > 0) {
        return rows[0];
      }
      return null;
    } catch (error) {
      console.error(
        "Erreur lors de la recherche de l'utilisateur par e-mail :",
        error
      );
      throw error;
    }
  }
  // TODO à voir si utile -->

  async postUserByEmail(email) {
    try {
      const [rows] = await this.database.query(
        `SELECT * FROM ${this.table} WHERE email = ?`,
        [email]
      );

      if (rows.length > 0) {
        return rows[0];
      }
      return null;
    } catch (error) {
      console.error(
        "Erreur lors de la recherche de l'utilisateur par e-mail :",
        error
      );
      throw error;
    }
  }

  static hashPassword(password, workFactor = 5) {
    return bcrypt.hash(password, workFactor);
  }
}

module.exports = UserManager;
