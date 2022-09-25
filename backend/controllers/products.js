const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  res.status(200).json({ message: "success" });
};

module.exports = { getAllProducts };
