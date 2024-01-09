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
router.get("/users", userControllers.getUsers);
router.get(
  "/users/:id",
  authMiddleware,
  authAdminMiddleware,
  userControllers.getUsersById
);
router.post("/login", userControllers.postLogin);
router.post("/users", userControllers.postUsers);
router.delete("/users/:id", userControllers.deleteUsers);
router.put("/users/:id", userControllers.updateUsers);
router.patch("/change/email", userControllers.patchEmail);

router.get("/artist", artistControllers.getArtists);
router.post("/artist", artistControllers.postArtist);

router.get("/artwork", artworkControllers.getArtwork);
router.get("/artwork/:id", artworkControllers.getArtworkById);
router.post("/artwork", artworkControllers.postArtwork);
router.delete("/artwork/:id", artworkControllers.deleteArtwork);
router.put("/artwork/:id", artworkControllers.updateArtwork);

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
