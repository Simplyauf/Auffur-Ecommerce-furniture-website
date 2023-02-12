const Product = require("../models/products");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const CustomErrorHandler = require("../errors/customErrorHandler");
const { title } = require("process");

const createProducts = async (req, res) => {
  const product = await Product.create(req.body);
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

const getAspecificProduct = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new CustomErrorHandler(401, "parameters missing");
  }
  const checkIfProductExist = await Product.findById({ _id: id }).select({
    _id: 1,
    title: 1,
    stock: 1,
    price: 1,
    discountPercentValue: 1,
    categories: 1,
    image: 1,
  });
  if (!checkIfProductExist) {
    throw new CustomErrorHandler(404, "Products not found");
  }
  res.status(200).json({ message: "success", product: checkIfProductExist });
};

const deleteAspecificProduct = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new CustomErrorHandler(401, "parameters missing");
  }

  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new CustomErrorHandler(404, "Products not found");
  }
  res.status(201).json({ message: "success", product });
};

const updateAspecificProduct = async (req, res) => {
  const updatedData = req.body;
  const { id } = req.params;
  if (!id || !updatedData) {
    throw new CustomErrorHandler(401, "parameters missing");
  }
  const Updatedproduct = await Product.findByIdAndUpdate(id, updatedData, { runValidators: true });

  res.status(201).json({ message: "product successfully updated", product: Updatedproduct });
};

const searchProducts = async (req, res) => {
  const { title, pageNo, perPage } = req.query;
  if (!title || !pageNo || !perPage) {
    throw new CustomErrorHandler(400, "parameters missing");
  }
  console.log(perPage, pageNo);
  const searchLength = await Product.countDocuments({ title: { $regex: title, $options: "i" } });
  const searchedProducts = await Product.find({ title: { $regex: title, $options: "i" } })
    .skip((pageNo - 1) * perPage)
    .limit(perPage);

  res.status(201).json({ product: searchedProducts, productsLength: searchLength });
};

const sortByLowStockProducts = async (req, res) => {
  const { pageNo, perPage } = req.query;
  if (!pageNo || !perPage) {
    throw new CustomErrorHandler(400, "parameters missing");
  }
  const productsLength = await Product.countDocuments();

  const sortedProducts = await Product.find({})
    .sort({ stock: 1 })
    .skip((pageNo - 1) * perPage)
    .limit(perPage);

  res.status(201).json({ products: sortedProducts, productsLength });
};

module.exports = {
  getAllProducts,
  createProducts,
  uploadProductImages,
  getAspecificProduct,
  deleteAspecificProduct,
  updateAspecificProduct,
  searchProducts,
  sortByLowStockProducts,
};
