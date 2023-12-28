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

module.exports = {
  getArtists,
};
