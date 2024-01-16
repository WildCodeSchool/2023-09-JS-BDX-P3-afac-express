const models = require("../models");

const getArtists = (_, res) => {
  models.artist
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getArtistById = (req, res) => {
  models.artist
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

const postArtist = (req, res) => {
  models.artist
    .create(req.body)
    .then(([rows]) => {
      res.send({
        id: rows.insertId,
        name: req.body.name,
        description: req.body.description,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ error: err.message });
    });
};

const updateArtist = (req, res) => {
  models.artist
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

const deleteArtist = (req, res) => {
  const id = parseInt(req.params.id, 10);
  return models.artist
    .delete(id)
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
  getArtists,
  getArtistById,
  postArtist,
  updateArtist,
  deleteArtist,
};
