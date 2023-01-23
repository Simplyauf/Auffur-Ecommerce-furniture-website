const { generateToken, emailVerificationMessageDatas } = require("./userAuthentication");
const User = require("../models/userData");
const CustomErrorHandler = require("../errors/customErrorHandler");
const { sendMessageToUserEmail } = require("./sendMailToUsers");

const resendEmailVerification = async (req, res) => {
  const { email } = req.body;

  let checkIfEmailExists = await User.findOne({ email });

  if (!checkIfEmailExists) {
    throw new CustomErrorHandler(400, "Email address hasnt been registered");
  } else if (checkIfEmailExists.verificationStatus === "verified") {
    throw new CustomErrorHandler(403, "User's account has already been verified");
  }
  let token = generateToken(email, "pending", "5d");

  await User.findByIdAndUpdate(checkIfEmailExists._id, { verificationToken: token }, { new: true }).exec();

  sendMessageToUserEmail(email, token, emailVerificationMessageDatas);

  res
    .status(200)
    .send("A verification link has been sent to your email. Please check your email to complete your registration.");
};

module.exports = resendEmailVerification;
