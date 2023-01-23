const jwt = require("jsonwebtoken");
const User = require("../models/userData");
const CustomErrorHandler = require("../errors/customErrorHandler");

const handleEmailLinkClick = async (req, res, next) => {
  let token = req.query.token;
  let task = req.params.task;
  let taskWithSpace = req.params.task.replace("-", " ");

  const isTokenInvalid = jwt.verify(token, process.env.SECRET_TOKEN_KEY, (err, decoded) => {
    if (err && err.name === "TokenExpiredError") {
      return "TokenExpiredError";
    } else if (err) {
      return "tokenInvalid";
    } else {
      return "tokenValid";
    }
  });

  let getUserDataByToken = await User.findOne({ verificationToken: token });
  if (isTokenInvalid === "TokenExpiredError") {
    throw new CustomErrorHandler(401, "verification link has expired");
  } else if (!getUserDataByToken) {
    throw new CustomErrorHandler(401, `${taskWithSpace} failed`);
  } else if (isTokenInvalid === "tokenInvalid") {
    throw new CustomErrorHandler(401, `${task} failed`);
  } else if (isTokenInvalid === "tokenValid" && getUserDataByToken) {
    // if it is password reset
    if (task === "password-reset") {
      // this redirect users to a frontend page that contains form where password can be changed
      res.redirect(`http://localhost:3000/changeMyPassword?token=${token}`);
    }
    if (task === "Email-verification") {
      await User.findByIdAndUpdate(
        getUserDataByToken._id,
        { verificationStatus: "verified", verificationToken: "" },
        { new: true }
      ).exec();

      res
        .status(200)
        .send(
          "Congratulations! Your account has been verified successfully. Thank you for verifying your email address. You can now log in and start using our services."
        );
    }
  }
};

module.exports = handleEmailLinkClick;
