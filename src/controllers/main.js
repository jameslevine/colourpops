const postColourQuery = require("../model/queries/addColour");

const postColour = (req, res) => {
  const [colour_name, hex_name] = Object.values(req.body);
  postColourQuery(colour_name, hex_name);
  res.redirect("/");
};

module.exports = {
  postColour
};
