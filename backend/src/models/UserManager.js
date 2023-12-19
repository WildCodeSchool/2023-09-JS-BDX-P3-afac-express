const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  create(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, city, language) values (?, ?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.city, user.language]
    );
  }
}
module.exports = UserManager;
