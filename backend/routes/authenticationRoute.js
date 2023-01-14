const express = require("express");
const { registerUser, loginUser } = require("../controllers/userAuthentication");
const router = express.Router();
const handleEmailLinkClick = require("../middleware/handleEmailLinkClick");
const { handleForgotPasswordClick, changePassword } = require("../controllers/password");

router.route("/verifyGmail/:task").get(handleEmailLinkClick);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/resetPasswordLink/:task").get(handleEmailLinkClick);
router.route("/changePassword").get(changePassword);
router.route("/forgotPasswordClick").post(handleForgotPasswordClick);

module.exports = router;
