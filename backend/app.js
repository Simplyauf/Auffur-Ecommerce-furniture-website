const express = require("express");
require("dotenv").config();
require("express-async-errors");
const connectDb = require("./db/connect");
const productRoute = require("./routes/productRoute");
const authRoute = require("./routes/authenticationRoute");
const errorHandler = require("./middleware/errorHandler");
const pathNotFound = require("./middleware/pathNotFound");
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");
const cors = require("cors");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

console.log(cloudinary.config());

const app = express();
//  middlewares
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Auffur</h1>  <a href=''>products page<a/> ");
});

app.use("/api/v1/products", productRoute);
app.use("/api/v1/auth", authRoute);
app.use(errorHandler);
app.use(pathNotFound);

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(`error : ${error}`);
  }
};

startServer();
