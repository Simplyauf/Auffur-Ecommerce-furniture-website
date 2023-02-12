const express = require("express");
const {
  getAllProducts,
  uploadProductImages,
  createProducts,
  getAspecificProduct,
  deleteAspecificProduct,
  searchProducts,
  updateAspecificProduct,
  sortByLowStockProducts,
} = require("../controllers/products");
const { checkIfUserIsAnAdminMiddleware } = require("../middleware/adminAuthorisation");

const router = express.Router();

router.route("/").post(checkIfUserIsAnAdminMiddleware, createProducts).get(getAllProducts);
router.route("/upload").post(checkIfUserIsAnAdminMiddleware, uploadProductImages);
router.route("/getProduct/:id").get(getAspecificProduct);
router.route("/deleteProduct/:id").delete(checkIfUserIsAnAdminMiddleware, deleteAspecificProduct);
router.route("/editAndupdateProduct/:id").patch(checkIfUserIsAnAdminMiddleware, updateAspecificProduct);
router.route("/searchProducts").get(searchProducts);
router.route("/sortByLowStockProducts").get(sortByLowStockProducts);

module.exports = router;
