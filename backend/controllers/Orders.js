const User = require("../models/userData");
const CustomErrorHandler = require("../errors/customErrorHandler");
const Product = require("../models/products");

const postUserOrders = async (req, res) => {
  const { orderDetails } = req.body;
  const { products } = orderDetails;

  const email = req.body?.orderDetails?.email?.toLowerCase();

  let isOrderAboveLimit;
  for (let key of products) {
    const findProducts = await Product.findById(key.productId);
    if (key.quantity > findProducts.stock) {
      isOrderAboveLimit = true;
    }
  }

  let checkIfEmailExists = await User.findOne({ email });
  if (!checkIfEmailExists) {
    throw new CustomErrorHandler(403, "Email address associated with the account must be used ");
  } else if (isOrderAboveLimit) {
    throw new CustomErrorHandler(403, "One or more product quantities selected is more than the amount in stock");
  } else {
    await User.findOneAndUpdate({ email }, { $push: { orders: orderDetails } }, { new: true });

    for (let key of products) {
      const findProducts = await Product.findById(key.productId);
      let newStock = findProducts.stock - key.quantity;
      // update new stock
      await findProducts.updateOne({ stock: newStock });
    }

    res.status(201).send("order sucessful");
  }
};

module.exports = postUserOrders;
