require("dotenv").config();
require("colors");
const express = require("express");

const cors = require("cors");
const connectDB = require("./dbinit");
const restaurants = require("./api/restaurants");
// const orders = require('./api/orders');
const errorHandler = require("./middleware/error");

const app = express();
const PORT = 5000;

connectDB();

if (process.env.NODE_ENV === "dev") {
  app.use(cors());
}

app.use(express.json());
app.use("/", restaurants);
// app.use('/orders', orders);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Started server on port ${PORT}`.rainbow.bold.inverse)
);
