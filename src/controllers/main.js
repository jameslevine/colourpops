const postColourQuery = require("../model/queries/postColour");
const getColoursQuery = require("../model/queries/getColours");

const postColour = (req, res) => {
  const [colour_name, hex_name] = Object.values(req.body);
  postColourQuery(colour_name, hex_name);
  res.redirect("/");
};

const getColours = (req, res) => {
  getColoursQuery().then(response => {
    return res.send(response);
  });
};

module.exports = {
  postColour,
  getColours
};
