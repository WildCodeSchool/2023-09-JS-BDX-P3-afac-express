class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  findOne(attribute, value) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE ${attribute} = ? LIMIT 1`,
      [value]
    );
  }

  put() {
    return this.database.query(`insert into * from ${this.table}`);
  }

  async delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }

  update(item, id) {
    const updateColumns = [];

    // Créez un tableau pour stocker les valeurs à mettre à jour
    const updateValues = [];

    // Parcourez les propriétés de l'objet item
    for (const key in item) {
      // Vérifiez si la propriété est définie et non nulle
      if (item[key] !== undefined && item[key] !== null) {
        // Ajoutez la colonne à mettre à jour et la valeur correspondante
        updateColumns.push(`${key} = ?`);
        updateValues.push(item[key]);
      }
    }

    // Vérifiez si des colonnes nécessitent une mise à jour
    if (updateColumns.length === 0) {
      return Promise.resolve({ affectedRows: 0 });
    }

    // Construisez la requête SQL avec les colonnes et les valeurs à mettre à jour
    const query = `UPDATE ${this.table} SET ${updateColumns.join(
      ", "
    )} WHERE id = ?`;
    updateValues.push(id);

    // Exécutez la requête
    return this.database.query(query, updateValues);
  }
}

module.exports = AbstractManager;
