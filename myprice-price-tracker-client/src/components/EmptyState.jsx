import React from "react";

import "../styles/EmptyState.css";

import noDataFoundImage from "../assets/no-data.svg";

const EmptyState = () => {
  return (
    <div className="empty-state | container">
      <img src={noDataFoundImage} className="empty-state__image" />
      <div className="empty-state__details">
        <h1 className="fs-title fw-bold" style={{ marginTop: "1em" }}>
          No products in your tracklist
        </h1>
        <p
          className="text-neutral-500 fs-body-sm"
          style={{ margin: "1.5em auto 0", maxWidth: "32ch" }}
        >
          Click on{" "}
          <span className="text-neutral-700 fw-bold">"Add Product"</span> and
          add a product to track
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
