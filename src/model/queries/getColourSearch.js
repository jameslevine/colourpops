const db = require("../db_connection");

const getColours = search => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM colours WHERE colour_name LIKE '%${search}%' OR hex_name LIKE '%${search}%'`
    )
      .then(response => {
        resolve(response.rows);
      })
      .catch(err => reject(err));
  });
};
module.exports = getColours;
