const models = require("../models");

const getArtwork = (_, res) => {
  models.artwork
    .findArtwork()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getArtworkForUsers = ({ params: { userId } }, res) => {
  models.artwork
    .findArtworkByUserId(userId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getArtworkById = (req, res) => {
  models.artwork
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] != null) {
        res.json(rows[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postArtwork = (req, res) => {
  models.artwork
    .create(req.body)
    .then(([rows]) => {
      res.send({ id: rows.insertId, ...req.body });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postArtworkForUser = async (
  { params: { userId }, body: artworkData },
  res
) => {
  try {
    // 1. Créer l'œuvre d'art avec la fonction createForArtworkUser
    const createResult = await models.artwork.createForArtworkUser(artworkData);

    // 2. Ajouter l'œuvre d'art à la table artwork_users avec la fonction addArtworkForUser
    await models.artwork.addArtworkForUser(createResult.insertId, userId);

    // 3. Récupérer les données mises à jour de l'utilisateur avec la fonction findArtworkByUserId
    const userArtwork = await models.artwork.findArtworkByUserId(userId);

    // Envoyer la réponse avec les données mises à jour
    res.status(201).json({ message: "Artwork added for user", userArtwork });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteArtwork = (req, res) => {
  models.artwork
    .delete(req.params.id)
    .then(([rows]) => {
      if (rows.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const updateArtwork = (req, res) => {
  models.artwork
    .update(req.body, req.params.id)
    .then((result) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      res.status(422).send({ message: err.message });
    });
};

module.exports = {
  getArtwork,
  getArtworkForUsers,
  getArtworkById,
  postArtwork,
  postArtworkForUser,
  deleteArtwork,
  updateArtwork,
};
