import React from "react";
import { Link } from "react-router-dom";

import "../styles/EmptyState.css";

import noDataFoundImage from "../assets/404-error.svg";

const PageNotFound = () => {
  return (
    <div className="empty-state | container">
      <img
        src={noDataFoundImage}
        className="empty-state__image"
        style={{ marginTop: "7.5em" }}
      />
      <div className="empty-state__details">
        <h1 className="fs-title fw-bold" style={{ marginTop: "1em" }}>
          Page Not Found
        </h1>
        <p
          className="text-neutral-500 fs-body-sm"
          style={{ margin: "1em auto 0", maxWidth: "28ch" }}
        >
          There is no such page that you are looking for.{" "}
          <Link to="/" className="text-neutral-700 fw-semi-bold">
            Go back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
