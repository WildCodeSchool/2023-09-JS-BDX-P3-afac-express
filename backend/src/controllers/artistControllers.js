const models = require("../models");

const getArtists = async (_, res) => {
  try {
    const [rows] = await models.artist.findAll();
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getArtistById = async (req, res) => {
  try {
    const [rows] = await models.artist.find(req.params.id);

    if (rows[0] !== null) {
      res.json(rows[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const postArtist = async (req, res) => {
  try {
    const [rows] = await models.artist.create(req.body);

    res.send({
      id: rows.insertId,
      name: req.body.name,
      description: req.body.description,
    });
  } catch (err) {
    console.error(err);
    res.status(422).send({ error: err.message });
  }
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

module.exports = {
  getArtists,
  getArtistById,
  postArtist,
  updateArtist,
};
