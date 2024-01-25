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
  try {
    const result = await models.upload.create(req.file);
    await models.artist.addAvatar(req.artist.id, result.id);
    return res.status(201).send({ ...req.artist, avatar: result });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

module.exports = { getList, creator };
