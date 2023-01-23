const User = require("../models/userData");
const bcryptjs = require("bcryptjs");
const CustomErrorHandler = require("../errors/customErrorHandler");
const { generateToken } = require("./userAuthentication");
const { sendMessageToUserEmail } = require("./sendMailToUsers");

// message datas to be passed in nodemailer configuration
const resetPasswordMessageData = (passwordVerificationToken) => {
  return {
    port: 587,
    secure: false,
    user: "211fc4a3084936",
    pass: "24c2f27583bed7",
    subject: "[Auffur] Password Reset Request",
    text: `We received a request to reset your password for your <b>Auffur</b> account.  If you made this request, please click the link below to reset your password or  paste the link in your browser to verify your email address: http://localhost:5000/api/v1/auth/resetPasswordLink/password-reset?token=${passwordVerificationToken} If you did not make this request, you can safely ignore this email. Your password will not be reset and your account will remain secure.   `,
    html: `<h2>Verify your email address </h2><br/><div>We received a request to reset your password for your <b>Auffur </b> account. If you made this request, please click the link below to reset your password:</div><br/> <a href="http://localhost:5000/api/v1/auth/resetPasswordLink/password-reset?token=${passwordVerificationToken}" style="display: inline-block; padding: 0.5em 1em; background-color: #fca311; color: white; text-decoration: none;">reset now</a> <br /> <br /> <br /> <div>This link will expire in 1 hour.If you did not make this request, you can safely ignore this email,your password will not be reset and your account will remain secure.
</div> <br /> <span>Thanks,</span> <br /> <span>Auffur Team</span>`,
  };
};

// This fires when "forgot password" button is clicked in frontend,it assumes the user email should be in login field
const handleForgotPasswordClick = async (req, res) => {
  const { email } = req.body;
  let checkIfEmailExists = await User.findOne({ email });

  if (!checkIfEmailExists) {
    throw new CustomErrorHandler(400, "Email address hasnt been registered");
  } else if (checkIfEmailExists.verificationStatus !== "verified") {
    throw new CustomErrorHandler(403, "User account must be verified");
  }
  let token = generateToken(email, "verified", "1hr");
  await User.findByIdAndUpdate(checkIfEmailExists._id, { verificationToken: token }, { new: true }).exec();

  sendMessageToUserEmail(email, token, resetPasswordMessageData);

  res
    .status(200)
    .send(
      "A password reset link has been sent to your email. Please check your inbox and follow the instructions to reset your password."
    );
};

// This will be used for updating the old password in the frontend
const changePassword = async (req, res) => {
  let token = req.headers.token;
  const { password } = req.body;
  console.log(token);
  let checkIfTokenExist = await User.findOne({ verificationToken: token });

  console.log(checkIfTokenExist);

  if (!checkIfTokenExist) {
    throw new CustomErrorHandler(400, "not authorized");
  } else {
    const hashedpassword = await bcryptjs.hash(password, 10);

    await User.findByIdAndUpdate(
      checkIfTokenExist._id,
      { password: hashedpassword, verificationToken: "" },
      { new: true }
    ).exec();
    res.status(201).send("password sucessfully changed");
  }
};

module.exports = { changePassword, handleForgotPasswordClick };
