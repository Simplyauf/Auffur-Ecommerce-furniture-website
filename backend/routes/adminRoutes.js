const express = require("express");
const { createNewAdmin, removeAdmin, validateUserAsAnAdmin, getAdminDatas } = require("../controllers/admin");
const { checkIfUserIsAnAdminMiddleware } = require("../middleware/adminAuthorisation");

const router = express.Router();

router.route("/checkIfUserIsAdmin").get(checkIfUserIsAnAdminMiddleware, validateUserAsAnAdmin);
router.route("/createNewAdmin").post(checkIfUserIsAnAdminMiddleware, createNewAdmin);
router.route("/getAdminDatas").post(checkIfUserIsAnAdminMiddleware, getAdminDatas);
router.route("/removeAdmin").delete(checkIfUserIsAnAdminMiddleware, removeAdmin);

module.exports = router;
