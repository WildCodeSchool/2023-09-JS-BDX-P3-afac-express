const models = require("../models");

const getArtwork = async (_, res) => {
  try {
    const [rows] = await models.artwork.findArtwork();
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getArtworkById = async (req, res) => {
  try {
    const [rows] = await models.artwork.findArtworkById(req.params.id);

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

const postArtwork = async (req, res) => {
  try {
    const [rows] = await models.artwork.create(req.body);
    const [result] = await models.artwork.findArtworkById(rows.insertId);
    res.send({
      id: rows.insertId,
      ...req.body,
      artist_name: result[0].artist_name,
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
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

// const getArtworkForUsers = (req, res) => {
//   const { artworkId, artistId, artistName, artworkTitle, artworkImage } =
//     req.params;

//   const { userId } = req.params;
//   models.artwork
//     .findArtworkForUser(
//       artworkId,
//       artistId,
//       userId,
//       artistName,
//       artworkTitle,
//       artworkImage
//     )
//     .then((artwork) => {
//       if (artwork) {
//         res.json(artwork);
//       } else {
//         res.status(404).json({ message: "Artwork not found" });
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

const getArtworkForUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const artwork = await models.artwork.findArtworkForUser(userId);

    if (artwork) {
      res.json(artwork);
    } else {
      res.status(404).json({ message: "Artwork not found" });
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const deleteArtworkForUser = async (req, res) => {
  try {
    const { userId, artworkId } = req.params;

    await models.artwork.deleteArtworkForUser(userId, artworkId);

    res.sendStatus(204);
  } catch (err) {
    console.error("Error deleting artwork:", err);
    res.sendStatus(500);
  }
};

const deleteArtwork = async (req, res) => {
  try {
    const [rows] = await models.artwork.delete(req.params.id);
    const [result] = await models.artwork.findArtwork();
    if (rows.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.send(result);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateArtwork = async (req, res) => {
  try {
    const result = await models.artwork.update(req.body, req.params.id);

    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    res.status(422).send({ message: err.message });
  }
};

module.exports = {
  getArtwork,
  // getArtworkForUsers,
  getArtworkById,
  getArtworkForUserById,
  deleteArtworkForUser,
  postArtwork,
  postArtworkForUser,
  deleteArtwork,
  updateArtwork,
};
