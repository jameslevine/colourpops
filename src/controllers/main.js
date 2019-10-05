const postColour = (req, res) => {
  console.log("form fields", req.body);
  res.redirect("/");
};

module.exports = {
  postColour
};
