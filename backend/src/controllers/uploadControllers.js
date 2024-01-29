const models = require("../models");

const getList = async (req, res) => {
  try {
    const [result] = await models.upload.findAll();
    return res.send(result);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const creatorArtist = async (req, res) => {
  const artistId = parseInt(req.body?.artist, 10) ?? 0;
  try {
    const newUpload = await models.upload.create(req.file);
    await models.artist.addAvatarArtist(
      artistId,
      `${req.protocol}://${req.headers.host}/${newUpload.url}`
    );
    const [artist] = await models.artist.find(artistId ?? 0);
    return res.status(201).send(artist[0]);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const creatorArtwork = async (req, res) => {
  const artworkId = parseInt(req.body?.artwork, 10) ?? 0;
  try {
    const newUpload = await models.upload.create(req.file);
    await models.artwork.addAvatarArtwork(
      artworkId,
      `${req.protocol}://${req.headers.host}/${newUpload.url}`
    );
    const [artwork] = await models.artwork.find(artworkId ?? 0);
    return res.status(201).send(artwork[0]);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

module.exports = { getList, creatorArtist, creatorArtwork };
