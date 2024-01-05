const AbstractManager = require("./AbstractManager");

class ArtworkManager extends AbstractManager {
  constructor() {
    super({ table: "artwork" });
  }

  create(artwork) {
    return this.database.query(
      `insert into ${this.table} (title, image, dimension, creation_place, artist_id) values (?, ?, ?, ?, ?)`,
      [
        artwork.title,
        artwork.image,
        artwork.dimension,
        artwork.creation_place,
        artwork.artist_id,
      ]
    );
  }

  update(artwork, id) {
    const updateColumns = [];

    // Créez un tableau pour stocker les valeurs à mettre à jour
    const updateValues = [];

    // Parcourez les propriétés de l'objet artwork
    for (const key in artwork) {
      // Vérifiez si la propriété est définie et non nulle
      if (artwork[key] !== undefined && artwork[key] !== null) {
        // Ajoutez la colonne à mettre à jour et la valeur correspondante
        updateColumns.push(`${key} = ?`);
        updateValues.push(artwork[key]);
      }
    }

    // Vérifiez si des colonnes nécessitent une mise à jour
    if (updateColumns.length === 0) {
      return Promise.resolve({ affectedRows: 0 });
    }

    // Construisez la requête SQL avec les colonnes et les valeurs à mettre à jour
    const query = `UPDATE artwork SET ${updateColumns.join(", ")} WHERE id = ?`;
    updateValues.push(id);

    // Exécutez la requête
    return this.database.query(query, updateValues);
  }
}
module.exports = ArtworkManager;
