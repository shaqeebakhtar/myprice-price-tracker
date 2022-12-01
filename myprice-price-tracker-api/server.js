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

app.post("/api/track", async (req, res) => {
  const newProduct = new Product({
    productName: req.body.productName,
    productURL: req.body.productURL,
    imageURL: req.body.imageURL,
    productSource: req.body.productSource,
    targetPrice: req.body.targetPrice,
    currPrice: req.body.currPrice,
  });

  const createProductTrack = await newProduct.save();
  res.json(createProductTrack);
});

connect(process.env.MONGO_URL).then(() =>
  app.listen(PORT, () => console.log(`server running on port : ${PORT}`))
);
