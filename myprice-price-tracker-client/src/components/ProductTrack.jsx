import React from "react";
import { Link } from "react-router-dom";

import "../styles/ProductTrack.css";

import angleRightIcon from "../assets/angle-right.svg";

import { StatusHigher } from "./ui/Status";
import { StatusLower } from "./ui/Status";

const ProductTrack = ({ product }) => {
  return (
    <div className="product-track | bg-neutral-100 box-shadow">
      <Link
        to={`product/${product.productName}`}
        className="product-track__name | gap-sm"
      >
        <span className="fs-body-sm text-neutral-500">Product Name</span>
        <p className="text-capitalize fs-title fw-bold">
          {product.productName}
        </p>
      </Link>
      <div className="product-track__curr-price | text-primary-400 gap-sm">
        <span className="fs-body-sm">Current Price</span>
        <p className="fs-title fw-bold">
          <span>₹</span>
          {product.currPrice}
        </p>
      </div>
      <div className="product-track__target-price | gap-sm">
        <span className="fs-body-sm text-neutral-500">Target Price</span>
        <p className="fs-title fw-bold">
          <span>₹</span>
          {product.targetPrice}
        </p>
      </div>
      <div className="product-track__status | gap-sm">
        {parseFloat(product.currPrice) <= parseFloat(product.targetPrice) ? (
          <StatusLower />
        ) : (
          <StatusHigher />
        )}
      </div>
      <div className="product-track__buy-link">
        <a
          href={product.productURL}
          target="_blank"
          className="buy-link | fw-bold"
        >
          Buy{" "}
          <span className="buy-link__website">on {product.productSource}</span>
        </a>
        <Link
          to={`product/${product.productName}`}
          className="product-track__view-details"
        >
          <img src={angleRightIcon} />
        </Link>
      </div>
    </div>
  );
};

export default ProductTrack;
