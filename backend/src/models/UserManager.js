const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  create(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password, is_admin) values (?, ?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.password, user.is_admin]
    );
  }
}
module.exports = UserManager;
