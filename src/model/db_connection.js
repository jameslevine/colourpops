const { Pool } = require("pg");
const url = require("url");
require("env2")("./.env");

let connectionString = process.env.DB_HOST;
console.log("connectionString", connectionString);
if (process.env.NODE_ENV === "test") {
  connectionString = process.env.TEST_DATABASE_URL;
}

const params = url.parse(connectionString);
console.log("params", params);
const [username, password] = params.auth.split(":");
const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== "localhost"
};
module.exports = new Pool(options);
