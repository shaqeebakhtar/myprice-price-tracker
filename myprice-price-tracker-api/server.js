import { config } from "dotenv";
config();
import express, { json, urlencoded } from "express";
import { connect } from "mongoose";
const app = express();
const PORT = 5000;

app.use(json(), urlencoded({ extended: false }));

import Product from "./src/models/Product.js";

app.get("/api/tracklist", async (req, res) => {
  const tracklist = await Product.find();
  res.json(tracklist);
});

app.get("/api/:productId", async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.json(product);
});

app.post("/api/track", async (req, res) => {
  const newProduct = new Product({
    productName: req.body.productName,
    productURL: req.body.productURL,
    imageURL: req.body.imageURL,
    productSource: req.body.productSource,
    targetPrice: req.body.targetPrice,
    currPrice: req.body.currPrice,
    lastUpdated: Date.now(),
  });

  const createProductTrack = await newProduct.save();
  res.json(createProductTrack);
});

app.put("/api/:productId", async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate(req.params.productId, {
    productURL: req.body.productURL,
    productName: req.body.productName,
    productSource: req.body.productSource,
    targetPrice: req.body.targetPrice,
    lastUpdated: Date.now(),
  });
  res.json(updateProduct);
});

app.delete("/api/:productId", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
  res.json(deletedProduct);
});

connect(process.env.MONGO_URL).then(() =>
  app.listen(PORT, () => console.log(`server running on port : ${PORT}`))
);
