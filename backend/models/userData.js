const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    adminStatus: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    verificationStatus: {
      type: String,
      default: "pending",
    },
    verificationToken: {
      type: String,
    },
    address: String,
    country: String,
    postalCode: Number,
    city: String,
    shippingMethod: {
      type: String,
      default: "standard",
      enum: ["standard", "express", "free shipping"],
    },
    orders: [
      {
        products: [
          {
            productId: { type: Schema.Types.ObjectId, ref: "Product" },
            quantity: { type: Number },
          },
        ],
        username: String,
        shippingMethod: String,
        email: String,
        address: String,
        country: String,
        postalCode: Number,
        city: String,
        totalAmount: Number,
        deliveryStatus: { type: String, enum: ["pending", "delivered", "cancelled"] },
        paymentStatus: { type: String, enum: ["pending", "paid", "cancelled"] },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
