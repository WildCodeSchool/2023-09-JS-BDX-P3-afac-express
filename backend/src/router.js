const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const artistControllers = require("./controllers/artistControllers");
const artworkControllers = require("./controllers/artworkControllers");
const { authMiddleware } = require("./middlewares/Security/auth.middleware");
const {
  authAdminMiddleware,
} = require("./middlewares/Security/auth.admin.middleware");

router.get("/users/personal", authMiddleware, userControllers.getProfile);
router.get(
  "/users",
  authMiddleware,
  authAdminMiddleware,
  userControllers.getUsers
);
router.get("/users/:id([0-9]+)", userControllers.getUsersById);
router.get("/auth/get-question/:email", userControllers.getUserQuestion);
router.get(
  "/auth/get-response/:email",
  userControllers.getCheckingSecretAnswer
);
router.post("/users/:email", userControllers.postUserByEmail);
router.post("/login", userControllers.postLogin);
router.post("/users", userControllers.postUsers);
router.post("/reset/password", userControllers.postPassword);
router.delete(
  "/users/:id",
  authMiddleware,
  authAdminMiddleware,
  userControllers.deleteUsers
);
router.delete(
  "/deletepersonnelaccount/:id",
  authMiddleware,
  userControllers.deleteUsers
);
// router.put(
//   "/users/:id",
//   authMiddleware,
//   authAdminMiddleware,
//   userControllers.updateUsers
// );
router.patch("/change/email", authMiddleware, userControllers.patchEmail);
router.patch("/change/password", authMiddleware, userControllers.patchPassword);

router.post(
  "/artwork/user",
  authMiddleware,
  artworkControllers.postArtworkForUser
);
router.get(
  "/artwork/user/:userId",
  authMiddleware,
  artworkControllers.getArtworkForUserById
);

router.delete(
  "/artwork/user/:userId/:artworkId",
  authMiddleware,
  artworkControllers.deleteArtworkForUser
);
router.get("/artist", artistControllers.getArtists);
router.get("/artist/:id", artistControllers.getArtistById);
router.post("/artist", artistControllers.postArtist);
router.put("/artist/:id", artistControllers.updateArtist);

router.get("/artwork", artworkControllers.getArtwork);
router.get("/artwork/:id", artworkControllers.getArtworkById);
router.post("/artwork", artworkControllers.postArtwork);
router.delete("/artwork/:id", artworkControllers.deleteArtwork);
router.put("/artwork/:id", artworkControllers.updateArtwork);

module.exports = router;
