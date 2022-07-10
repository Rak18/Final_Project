const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const connectDb = require("./config/config");
const Product = require("./models/productModel");
const ProductData = require("./data/product-data");

//config dot env and mongodb conn file
dotenv.config();
connectDb();

//import data
const importData = async () => {
  try {
    await Product.deleteMany();
    const sampleData = ProductData.map((product) => {
      return { ...product }});
    await Product.insertMany(sampleData);
    console.log("DATA Imported".bgGreen.white);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.white);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
