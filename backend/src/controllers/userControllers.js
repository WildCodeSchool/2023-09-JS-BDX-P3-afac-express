const jwt = require("jsonwebtoken");
const models = require("../models");

function generateAccessToken(data) {
  return jwt.sign(data, process.env.APP_SECRET, { expiresIn: "1800s" });
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

const getUserQuestion = (req, res) => {
  models.users
    .getUserByEmail(req.params.email)
    .then((user) => {
      console.error("rows", user);

      if (user != null) {
        res.json({ question: user.secret_question });
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postUserByEmail = (req, res) => {
  models.users
    .postUserByEmail(req.params.email)
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
      const token = generateAccessToken({
        email: user.email,
        admin: user.is_admin,
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
        firstname: req.body.firstname,
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

module.exports = {
  getUsers,
  getUsersById,
  getUserQuestion,
  postUserByEmail,
  postLogin,
  postUsers,
  deleteUsers,
  updateUsers,
};
