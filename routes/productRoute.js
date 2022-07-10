const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");

//GET ALL PIZZA || @GET REQUEST
router.get("/getAllProducts", async (req, res) => {
  try {
    const products = await productModel.find({});
    res.send(products);
  } catch (error) {
    res.json({ message: error });
  }
});



router.post("/addproduct", async (req, res) => {
  const {product} = req.body;
  try {
    const newProduct = new productModel({
      name: product.name,
      // image: product.image,
      image: product.imageUrl,
      varients: ["small", "medium", "large"],
      description: product.description,
      category: product.category,
      prices: [product.prices],
    });
    await newProduct.save();
    res.status(201).send("New Product Added");
  } catch (error) {
    res.json({ message: error });
  }
});


router.post("/getproductbyid", async (req, res) => {
  const productId = req.body.productId
  try {
    const product = await productModel.findOne({_id: productId});
    res.send(product);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/updateproduct", async (req, res) => {
  const updatedProduct = req.body.updatedPizza;
  try {
    const product = await productModel.findOne({ _id: updatedProduct._id });
    (pizza.name = updatedProduct.name),
      (product.description = updatedProduct.description),
      (product.image = updatedProduct.image),
      (product.category = updatedProduct.category),
      (product.prices = [updatedProduct.prices]);
    await product.save();
    res.status(200).send("Product Update Success");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});


router.post('./deleteproduct'), async(req,res) => {
  const productId = req.body.productId
  try {
    await productModel.findOneAndDelete({ _id: productId })
    res.status(200).send('Product Deleted')
  } catch (error) {
    res.status(404).json({ message: error})
  }
}

module.exports = router