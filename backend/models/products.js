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
      "Featured Categories": { type: [String], enums: ["featured", "first order deal", "discounts"] },
      location: { type: [String], enums: ["kitchen", "dining", "bedroom", "living room", "office"] },
      features: { type: [String], enums: ["chairs", "tables", "sets", "cupboards", "lighting", "sofa"] },
      others: { type: [String], enums: ["kids"] },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
// const productCategories = {
//   "Featured Categories": ["featured", "first order deal", "discounts"],
//   location: ["kitchen", "dining", "bedroom", "living room", "office"],
//   features: ["chairs", "tables", "sets", "cupboards", "lighting", "sofa"],
//   others: ["kids"],
// };
