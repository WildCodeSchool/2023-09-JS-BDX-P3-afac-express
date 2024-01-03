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

module.exports = {
  getArtwork,
};
