const db = require("../db_connection");

const getColours = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM colours")
      .then(response => {
        resolve(response.rows);
      })
      .catch(err => reject(err));
  });
};
module.exports = getColours;
