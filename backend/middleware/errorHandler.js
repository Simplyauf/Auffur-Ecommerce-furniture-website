const CustomErrorHandler = require("../errors/customErrorHandler");

const errorHandler = (err, req, res, next) => {
	console.log(err.message);
	if (err instanceof CustomErrorHandler) {
		res.status(err.statusCode).json({ message: err.message });
	}
	res.status(500).json({ message: "Something went wrong" });
};

module.exports = errorHandler;
