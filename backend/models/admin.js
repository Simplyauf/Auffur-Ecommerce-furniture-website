const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new mongoose.Schema(
  {
    userData: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    adminRank: {
      type: Number,
      required: [true, "pls choose a rank"],
      enums: [1, 2, 3],
    },
    lastLogin: { type: Date },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admin", adminSchema);
