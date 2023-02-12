const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const CustomErrorHandler = require("../errors/customErrorHandler");
const bcryptjs = require("bcryptjs");
const User = require("../models/userData");
const mongoose = require("mongoose");

const createNewAdmin = async (req, res) => {
  const { email, adminRank } = req.body;
  const { doerRank, doerData } = res.locals.actionDoer;

  let checkIfEmailExistsinUsers = await User.findOne({ email });
  let checkIfEmailExistsinAdmin = await Admin.findOne({ email });

  if (checkIfEmailExistsinAdmin) {
    throw new CustomErrorHandler(400, "Email  has already been appointed admin status");
  }
  if (!checkIfEmailExistsinUsers) {
    throw new CustomErrorHandler(400, "Incorect credentials");
  } else if (checkIfEmailExistsinUsers && checkIfEmailExistsinUsers.verificationStatus === "pending") {
    throw new CustomErrorHandler(403, "User Email address must be verified before login");
  } else if (doerRank !== 1) {
    throw new CustomErrorHandler(400, "You arent eligible for this action");
  } else {
    // transaction allows for an atomic run where multiple function can be run and if one fail,the operation fails entirely
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      await Admin.create({ userData: checkIfEmailExistsinUsers._id, adminRank });
      await User.findByIdAndUpdate(checkIfEmailExistsinUsers._id, { adminStatus: true });

      await session.commitTransaction();

      res.status(201).json({ message: "User's admin appointment successful" });
    } catch (error) {
      await session.abortTransaction();
      throw new CustomErrorHandler(500, "Something went wrong");
    } finally {
      session.endSession();
    }
  }
};

const removeAdmin = async (req, res) => {
  const { email } = req.body;
  const { doerRank, doerData } = res.locals.actionDoer;

  let checkIfEmailExistsinUsers = await User.findOne({ email });
  let checkIfEmailExistsinAdmin = await User.findOne({ email });

  if (!checkIfEmailExistsinAdmin) {
    throw new CustomErrorHandler(400, "Email address is not an admin");
  } else if (!checkIfEmailExistsinUsers) {
    throw new CustomErrorHandler(400, "Incorect credentials");
  } else if (doerRank !== 1) {
    throw new CustomErrorHandler(400, "You arent eligible for this action");
  } else {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      await Admin.findOneAndDelete({ userData: checkIfEmailExistsinUsers._id });
      await User.findByIdAndUpdate(checkIfEmailExistsinUsers._id, { adminStatus: false });

      await session.commitTransaction();

      res.status(201).json({ message: "User admin status has been revoked" });
    } catch (error) {
      await session.abortTransaction();
      throw new CustomErrorHandler(500, "Something went wrong");
    } finally {
      session.endSession();
    }
  }
};

const getAdminDatas = async (req, res) => {
  const adminDatas = await Admin.find({}).populate(userData);
  res.status(200).json({ adminDatas });
};

// invalidate jwt after 6hours of time has elapsed since last activity of admins
const clearAdminJwt = async () => {
  const admins = await Admin.find({});

  for (let key of admins) {
    let {
      userData: { verificationToken },
    } = await key.populate("userData");

    if (new Date() - key.lastLogin > 6 * 60 * 60 * 1000) {
      verificationToken = "";
      await key.save();
    }
  }
};

const validateUserAsAnAdmin = async (req, res) => {
  res.locals = "";

  res.status(200).send("success");
};
module.exports = { createNewAdmin, removeAdmin, getAdminDatas, clearAdminJwt, validateUserAsAnAdmin };
