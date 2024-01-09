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

module.exports = {
  getArtists,
  postArtist,
};
