const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product's title is required"],
    },
    price: {
      type: Number,
      required: [true, "Product's price is required"],
    },
    discountPercentValue: {
      type: Number,
      default: function () {
        return !this.discountPercentValue && 0;
      },
    },
    image: {
      type: String,
      required: [true, "Product's image is required"],
    },
    categories: {
      type: [String],
      enums: [
        "chairs",
        "tables",
        "kids",
        "office",
        "sets",
        "cupboards",
        "lighting",
        "discounts",
        "bedroom",
        "living room",
        "kitchen",
        "dining",
        "featured",
        "first order deal",
      ],
      required: [true, "Product's categories is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
