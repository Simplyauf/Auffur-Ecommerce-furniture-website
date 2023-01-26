const CustomErrorHandler = require("../errors/customErrorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userData");

const isTokenvalid = async (req, res) => {
  let authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomErrorHandler(401, false);
  } else {
    const tokenVerification = jwt.verify(token, process.env.SECRET_TOKEN_KEY, (err, decoded) => {
      if (err) {
        return false;
      } else {
        return true;
      }
    });
    let checkIfTokenExist = await User.findOne({ verificationToken: token });

    if (!checkIfTokenExist) {
      throw new CustomErrorHandler(401, false);
    }
    if (!tokenVerification && !checkIfTokenExist) {
      throw new CustomErrorHandler(401, false);
    } else {
      res.status(200).send(true);
    }
  }
};
module.exports = isTokenvalid;
