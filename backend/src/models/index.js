require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// // try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// // declare and fill models: that's where you should register your own managers

const models = {};

const ArtistManager = require("./ArtistManager");
const UserManager = require("./UserManager");
const ArtworkManager = require("./ArtworkManager");
const UploadManager = require("./UploadManager");

models.artist = new ArtistManager();
models.artist.setDatabase(pool);

models.users = new UserManager();
models.users.setDatabase(pool);

models.artwork = new ArtworkManager();
models.artwork.setDatabase(pool);

models.upload = new UploadManager();
models.upload.setDatabase(pool);

module.exports = models;
