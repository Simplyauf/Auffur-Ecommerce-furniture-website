const CustomErrorHandler = require("../errors/customErrorHandler");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomErrorHandler) {
    res.status(CustomErrorHandler.statusCode).json({ message: CustomErrorHandler.message });
  }
  res.status(500).json({ message: "Something went wrong" });
};

module.exports = errorHandler;
