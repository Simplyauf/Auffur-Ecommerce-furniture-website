const pathNotFound = (req, res) => {
  res.status(404).send("path not found");
};

module.exports = pathNotFound;
