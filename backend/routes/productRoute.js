const express = require("express");
const { getAllProducts, uploadProductImages, createProducts, getAspecificProduct } = require("../controllers/products");
const router = express.Router();

router.route("/").post(createProducts).get(getAllProducts);
router.route("/upload").post(uploadProductImages);
router.route("/getProduct").post(getAspecificProduct);

module.exports = router;
