const express = require("express");
const { registerUser, loginUser } = require("../controllers/userAuthentication");
const router = express.Router();
const handleEmailLinkClick = require("../middleware/handleEmailLinkClick");
const { handleForgotPasswordClick, changePassword } = require("../controllers/password");
const isTokenvalid = require("../controllers/isTokenValid");
const resendEmailVerification = require("../controllers/resendEmailVerification");

router.route("/verifyGmail/:task").get(handleEmailLinkClick);
router.route("/isTokenValid").get(isTokenvalid);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/resetPasswordLink/:task").get(handleEmailLinkClick);
router.route("/changePassword").post(changePassword);
router.route("/forgotPasswordClick").post(handleForgotPasswordClick);
router.route("/resendEmailVerificationLink").post(resendEmailVerification);

module.exports = router;
