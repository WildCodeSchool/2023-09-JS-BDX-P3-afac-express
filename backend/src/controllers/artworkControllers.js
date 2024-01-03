const models = require("../models");

const getArtwork = (_, res) => {
  models.artwork
    .findAll()
    .then((rows) => {
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

module.exports = {
  getArtwork,
  getArtworkById,
  postArtwork,
  deleteArtwork,
};
