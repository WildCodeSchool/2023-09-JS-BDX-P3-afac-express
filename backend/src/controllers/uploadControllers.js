const models = require("../models");

const getList = async (req, res) => {
  try {
    const [result] = await models.upload.findAll();
    return res.send(result);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const creator = async (req, res) => {
  const artistId = +(req.body?.artist ?? 0);
  try {
    const newUpload = await models.upload.create(req.file);
    await models.artist.addAvatar(
      artistId,
      `${req.protocol}://${req.headers.host}/${newUpload.url}`
    );
    const [artist] = await models.artist.find(artistId ?? 0);
    return res.status(201).send(artist[0]);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

module.exports = { getList, creator };
