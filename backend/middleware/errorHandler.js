const { default: mongoose } = require("mongoose");
const CustomErrorHandler = require("../errors/customErrorHandler");

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomErrorHandler) {
    res.status(err.statusCode).json({ message: err.message });
  } else if (err instanceof mongoose.Error.ValidationError) {
    res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = errorHandler;
