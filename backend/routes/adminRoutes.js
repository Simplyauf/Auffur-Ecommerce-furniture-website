const express = require("express");
const { createNewAdmin, removeAdmin } = require("../controllers/admin");
const { checkIfUserIsAnAdminMiddleware } = require("../middleware/adminAuthorisation");

const router = express.Router();

router.route("/createNewAdmin").post(checkIfUserIsAnAdminMiddleware, createNewAdmin);
router.route("/removeAdmin").delete(checkIfUserIsAnAdminMiddleware, removeAdmin);

module.exports = router;
