const jwt = require("jsonwebtoken");
const models = require("../models");

function generateAccessToken(data) {
  return jwt.sign(data, process.env.APP_SECRET); // TODO ajouter , { expiresIn: "1800s" } ?
}

const getUsers = (_, res) => {
  models.users
    .findAll()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUsersById = (req, res) => {
  models.users
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

const postLogin = (req, res) => {
  models.users.login(req.body).then((user) => {
    if (user) {
      // TODO à voir si on garde email et admin
      const token = generateAccessToken({
        email: user.email,
        admin: user.is_admin,
        id: user.id,
      });
      res.send({ token });
    } else {
      res.status(401).send({ error: "Identifiant incorrect!!!" });
    }
  });
};

const postUsers = (req, res) => {
  models.users
    .create(req.body)
    .then((result) => {
      res.send({
        id: result.insertId,
        firstnname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        is_admin: req.body.is_admin,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ error: err.message });
    });
};

const deleteUsers = (req, res) => {
  models.users
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

const updateUsers = (req, res) => {
  models.users
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

const patchEmail = async (req, res) => {
  try {
    const { user } = req;

    const [emailRows] = await models.users.findOne("email", user.email);
    if (!emailRows.length || emailRows[0].id !== user.id) {
      res.sendStatus(404);
      return;
    }

    await models.users.update({ email: req.body.newEmail }, user.id);

    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};

const getProfile = async (req, res) => {
  res.send(req.user);
};

module.exports = {
  getUsers,
  getUsersById,
  postLogin,
  postUsers,
  deleteUsers,
  updateUsers,
  patchEmail,
  getProfile,
};
