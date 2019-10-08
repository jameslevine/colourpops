const postColourQuery = require("../model/queries/postColour");
const getColoursQuery = require("../model/queries/getColours");
const getColourSearchQuery = require("../model/queries/getColourSearch");
const url = require("url");

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

const getColourSearch = (req, res) => {
  const q = url.parse(req.url, true);
  getColourSearchQuery(q.query.search).then(response => {
    return res.send(response);
  });
};

module.exports = {
  postColour,
  getColours,
  getColourSearch
};
