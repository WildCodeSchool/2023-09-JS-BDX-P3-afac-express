const bcrypt = require("bcrypt");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  async create(user) {
    if (
      !user.firstname ||
      !user.lastname ||
      !user.email ||
      !user.password ||
      !user.secret_question ||
      !user.secret_answer
    ) {
      throw new Error("Missing required fields");
    }

    const answer = await UserManager.hashPassword(user.secret_answer);
    const hash = await UserManager.hashPassword(user.password);
    const result = await this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password, is_admin, secret_question, secret_answer) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        hash,
        user.is_admin ?? false,
        user.secret_question,
        answer,
      ]
    );

    return {
      id: result.insertId,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      is_admin: user.is_admin ?? false,
    };
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
