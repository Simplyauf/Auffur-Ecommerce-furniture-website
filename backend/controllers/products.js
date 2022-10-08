const Product = require("../models/products");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const CustomErrorHandler = require("../errors/customErrorHandler");

const createProducts = async (req, res) => {
  console.log(req.body);
  const { image } = req.body;
  const product = await Product.create(req.body);
  // const product = await Product.create(req.body);
  res.status(201).json(product);
};

const getAllProducts = async (req, res) => {
  let products = await Product.find({});

  res.status(200).json({ message: "success", products });
};

const uploadProductImages = async (req, res) => {
  if (!req.files.image.mimetype.includes("image")) {
    throw CustomErrorHandler(415, "invalid image type");
  }
  if (!req.files) {
    throw CustomErrorHandler(400, "No image waas uploaded");
  }
  if (req.files.image.size > 3 * 1024 * 1024) {
    throw CustomErrorHandler(400, "Image size has exceeded the limit");
  }
  const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
    use_filename: true,
    folder: "file-Auffur",
  });
  fs.unlinkSync(req.files.image.tempFilePath);

  console.log(result.secure_url);

  return res.status(201).json({ image: { src: result.secure_url } });
};

module.exports = { getAllProducts, createProducts, uploadProductImages };

// const options = {
//   use_filename: true,
//   folder: "file-Auffur",
// };

// try {
//   const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, options);
//   return res.status(201).json({ image: { src: result.secure_url } });
// } catch (error) {
//   console.log(error);
// }
// fs.unlinkSync(req.files.image.tempFilePath);
// console.log(result);
