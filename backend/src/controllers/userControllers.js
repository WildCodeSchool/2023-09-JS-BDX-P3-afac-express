const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const models = require("../models");
const UserManager = require("../models/UserManager");

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

const getCheckingSecretAnswer = (req, res) => {
  models.users
    .getUserByEmail(req.params.email)
    .then((user) => {
      console.error("rows", user);
      if (user != null) {
        res.json({ response: user.secret_answer });
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
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ error: err.message });
    });
};

const postPassword = async (req, res) => {
  try {
    const { newPassword, confirmPassword, answer, email } = req.body;

    // Récupérez l'utilisateur en fonction de l'email
    const user = await models.users.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    // Validez le nouveau mot de passe
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: "Mot de passe incorrect" });
    }

    // Vérifiez la réponse à la question secrète
    if (!bcrypt.compareSync(answer, user.secret_answer)) {
      return res.status(403).json({ error: "Réponse secrète incorrecte" });
    }

    // Mettez à jour le mot de passe dans la base de données
    const hashedPassword = await UserManager.hashPassword(newPassword);
    await models.users.update({ password: hashedPassword }, user.id);

    return res.json({
      message: "Mot de passe réinitialisé avec succès",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUsers = (req, res) => {
  const id = parseInt(req.params.id, 10);
  return models.users
    .delete(id)
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

const patchPassword = async (req, res) => {
  try {
    const { user } = req;

    const [passwordRows] = await models.users.findOne("id", user.id);

    if (
      !passwordRows.length ||
      !bcrypt.compareSync(req.body.oldPassword, passwordRows[0].password)
    ) {
      res.sendStatus(404);
      return;
    }

    const hashedPasswordFromDB = passwordRows[0].password;

    const isPasswordMatch = await bcrypt.compare(
      req.body.oldPassword,
      hashedPasswordFromDB
    );

    if (!isPasswordMatch) {
      res.sendStatus(404);
      return;
    }

    const hashedNewPassword = await bcrypt.hash(req.body.newPassword, 10);
    await models.users.update({ password: hashedNewPassword }, user.id);

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
  getUserQuestion,
  getCheckingSecretAnswer,
  postUserByEmail,
  postLogin,
  postUsers,
  postPassword,
  deleteUsers,
  updateUsers,
  patchEmail,
  patchPassword,
  getProfile,
};
