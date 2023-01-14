const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please enter a username"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "please enter an email"],
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
    },
    verificationStatus: {
      type: String,
      default: "pending",
    },
    verificationToken: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
