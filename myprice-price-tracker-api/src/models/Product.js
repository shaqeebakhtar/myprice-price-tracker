import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: String,
  productURL: String,
  imageURL: String,
  productSource: String,
  targetPrice: Number,
  currPrice: Number,
  dateCreated: { type: Date, default: Date.now },
  lastUpdated: Date,
});

const Product = mongoose.model("product", productSchema);

export default Product;
