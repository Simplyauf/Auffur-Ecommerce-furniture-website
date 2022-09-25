const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categories: {
    type: String,
    enums: ["chairs", "tables", "kids", "lightning"],
  },
});

module.exports = mongoose.model("Product", productSchema);
