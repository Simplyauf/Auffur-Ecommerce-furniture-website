require("dotenv").config();
const productJson = require("./productsJSON");
const connectDb = require("./db/connect");
const Products = require("./models/products");

const populateDb = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    await Products.deleteMany();
    await Products.create(productJson);
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
};

populateDb();
