const db = require("../db_connection");

const postColour = (colour_name, hex_name) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO colours (colour_name, hex_name) VALUES ($1, $2)", [
      colour_name,
      hex_name
    ])
      .then(response => {
        console.log("new colour added to colours table");
        resolve(true);
      })
      .catch(err => reject(err));
  });
};
module.exports = postColour;
