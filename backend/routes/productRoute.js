const express = require("express");
const { getAllProducts, uploadProductImages, createProducts } = require("../controllers/products");
const router = express.Router();

router.route("/").post(createProducts).get(getAllProducts);
router.route("/upload").post(uploadProductImages);

module.exports = router;
