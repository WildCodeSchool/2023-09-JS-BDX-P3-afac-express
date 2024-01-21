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

const postArtworkForUser = async (req, res) => {
  const {
    artworkId,
    artistId,
    userId,
    artistName,
    artworkTitle,
    artworkImage,
  } = req.body;

  try {
    await models.artwork.addArtworkForUser(
      artworkId,
      artistId,
      userId,
      artistName,
      artworkTitle,
      artworkImage
    );

    res.status(201).json({
      artworkId,
      artistId,
      userId,
      artistName,
      artworkTitle,
      artworkImage,
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getArtworkForUsers = (req, res) => {
  const { artworkId, artistId, artistName, artworkTitle, artworkImage } =
    req.params;

  const { userId } = req.params;
  models.artwork
    .findArtworkForUser(
      artworkId,
      artistId,
      userId,
      artistName,
      artworkTitle,
      artworkImage
    )
    .then((artwork) => {
      if (artwork) {
        res.json(artwork);
      } else {
        res.status(404).json({ message: "Artwork not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getArtworkForUserById = (req, res) => {
  const { userId } = req.params;

  models.artwork
    .findArtworkForUser(userId)
    .then((artwork) => {
      if (artwork) {
        res.json(artwork);
      } else {
        res.status(404).json({ message: "Artwork not found" });
      }
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
  getArtworkForUserById,
  postArtwork,
  postArtworkForUser,
  deleteArtwork,
  updateArtwork,
};
