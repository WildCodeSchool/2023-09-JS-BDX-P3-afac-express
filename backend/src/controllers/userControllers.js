// const models = require("../models");

// const getUsers = (_, res) => {
//   models.user
//     .findAll()
//     .then(([rows]) => {
//       res.send(rows);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

// // const getUsersById = (req, res) => {
// //  const user = await models.user
// //  .findOne({ where: { id: userId } }); /*.findOne({ where: { id } })*/   /*await models.user.findOne({ where: { id: userId } });*/
// //   models.user
// //     .find({ where: { id } })
// //     .then(([rows]) => {
// //       if (rows[0] != null) {
// //         res.json(rows[0]);
// //       } else {
// //         res.sendStatus(404);
// //       }
// //     })
// //     .catch((err) => {
// //       console.error(err);
// //       res.sendStatus(200);
// //     });
// // };

// // const getUsersById = (req, res) => {
// //     const id = parseInt(req.params.id);
// //     models.user
// //       .findOne({ where: { id } })
// //       .then((user) => {
// //         if (user) {
// //           res.userjson();
// //         } else {
// //           res.status(404).send("Utilisateur non trouvé");
// //         }
// //       })
// //       .catch((error) => {
// //         console.error("Erreur lors de la récupération de l'utilisateur :", error);
// //         res.status(500).send("Erreur serveur");
// //       });
// //   };

// module.exports = {
//   getUsers,
// //   getUsersById,
// };
