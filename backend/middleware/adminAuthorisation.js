const jwt = require("jsonwebtoken");
const CustomErrorHandler = require("../errors/customErrorHandler");
const Admin = require("../models/admin");
const User = require("../models/userData");

const checkIfUserIsAnAdminMiddleware = async (req, res, next) => {
  let authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1] || " ";
  console.log(token);
  const tokenVerification = jwt.verify(token, process.env.SECRET_TOKEN_KEY, (err, decoded) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      return true;
    }
  });

  let checkIfTokenExist = await User.findOne({ verificationToken: token });

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomErrorHandler(401, "Unauthorized,please relogin");
  } else if (!tokenVerification) {
    throw new CustomErrorHandler(401, "Unauthorized,please relogin");
  } else if (!checkIfTokenExist) {
    throw new CustomErrorHandler(401, "Unauthorized,only logged in admin may perfrom action");
  } else if (checkIfTokenExist && checkIfTokenExist.adminStatus === true) {
    const adminData = await Admin.findOne({ userData: checkIfTokenExist._id });
    
    res.locals.actionDoer = { doerRank: adminData.adminRank, doerData: checkIfTokenExist };
    next();
  } else {
    throw new CustomErrorHandler(401, "Unauthorized,only logged in admin may perfrom action");
  }
};

module.exports = { checkIfUserIsAnAdminMiddleware };
