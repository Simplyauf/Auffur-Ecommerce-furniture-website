const express = require("express");
const postUserOrders = require("../controllers/Orders");
const router = express.Router();

router.route("/placeOrders").post(postUserOrders);

module.exports = router;
