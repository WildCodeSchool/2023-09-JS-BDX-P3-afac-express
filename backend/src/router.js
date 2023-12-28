const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const artistControllers = require("./controllers/artistControllers");

router.get("/users", userControllers.getUsers);
router.get("/users/:id", userControllers.getUsersById);

router.post("/users", userControllers.postUsers);
router.delete("/users/:id", userControllers.deleteUsers);

router.get("/artists", artistControllers.getArtists);

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
