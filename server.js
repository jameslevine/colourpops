const express = require("express");

// Controllers - aka, the db queries
const main = require("./src/controllers/main");

// use process.env variables to keep private variables,
// be sure to ignore the .env file in github
require("dotenv").config();

// Express Middleware
const helmet = require("helmet"); // creates headers that protect from attacks (security)
const cors = require("cors"); // allows/disallows cross-site communication
const morgan = require("morgan"); // logs requests

// App
const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("combined")); // use 'tiny' or 'combined'
app.use(express.urlencoded({ extended: true }));

// App Routes - Auth
app.get("/", (req, res) => res.send("hello world"));
app.post("/postcolour", (req, res) => main.postColour(req, res));

// App Server Connection
app.listen(process.env.PORT || 8080, () => {
  console.log(`app is running on port ${process.env.PORT || 8080}`);
});
