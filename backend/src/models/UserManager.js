const AbstractManager = require("./AbstractManager");
const passwordControllers = require("../controllers/passwordControllers");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  async create(user) {
    try {
      // Hacher le mot de passe avant de le stocker dans la base de données
      const hashedPassword = await passwordControllers.hashPassword(
        user.password
      );

      // Utiliser le mot de passe haché dans la requête SQL
      return this.database.query(
        `insert into ${this.table} (firstname, lastname, email, city, language, password) values (?, ?, ?, ?, ?, ?)`,
        [
          user.firstname,
          user.lastname,
          user.email,
          user.city,
          user.language,
          hashedPassword,
        ]
      );
    } catch (error) {
      console.error(error);
      throw error; // Gérer l'erreur ou la propager selon vos besoins
    }
  }
}

module.exports = UserManager;
