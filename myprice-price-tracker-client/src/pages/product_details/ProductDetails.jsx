import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "../../styles/ProductDetails.css";

import angleRightIcon from "../../assets/angle-right.svg";
import bellAlertIcon from "../../assets/bell-alert.svg";

import Header from "../../components/header";
import DeletePopup from "../../components/popups/DeletePopup";
import PriceAlertPopup from "../../components/popups/PriceAlertPopup";
import EditProductPopup from "../../components/popups/EditProductPopup";
import { StatusHigher } from "../../components/ui/Status";
import { StatusLower } from "../../components/ui/Status";

const ProductDetails = ({ data }) => {
  const [alertEmail, setAlertEmail] = useState("email@domain.com");
  const [deletePopupActive, setDeletePopupActive] = useState(false);
  const [emailAlertPopupActive, setEmailAlertPopupActive] = useState(false);
  const [editPopupActive, setEditPopupActive] = useState(false);

  const navigate = useNavigate();

  if (deletePopupActive || emailAlertPopupActive || editPopupActive) {
    document.body.classList.add("popup-active");
  } else {
    document.body.classList.remove("popup-active");
  }

  const { productName } = useParams();

  const productArray = data.filter((product) => {
    return productName === product.productName;
  });

  const product = productArray[0];

  return (
    <>
      <Header />
      <div className="product-details | container">
        {deletePopupActive && (
          <DeletePopup
            setDeletePopupActive={setDeletePopupActive}
            productName={product.productName}
          />
        )}

        {emailAlertPopupActive && (
          <PriceAlertPopup
            setEmailAlertPopupActive={setEmailAlertPopupActive}
            alertEmail={alertEmail}
            setAlertEmail={setAlertEmail}
          />
        )}

        {editPopupActive && (
          <EditProductPopup
            setEditPopupActive={setEditPopupActive}
            product={product}
          />
        )}

        <div className="product-details__header">
          <button
            className="button | button--back fw-semi-bold text-neutral-500"
            onClick={() => navigate(-1)}
          >
            <img src={angleRightIcon} className="icon | box-shadow" />
            Go Back
          </button>
        </div>
        <div className="product-details__controls | box-shadow">
          <div className="product-details__status | box-shadow">
            <span className="fs-body text-neutral-500">Status</span>
            {parseFloat(product.currPrice) <=
            parseFloat(product.targetPrice) ? (
              <StatusLower />
            ) : (
              <StatusHigher />
            )}
          </div>
          <div className="product-details__edit-delete | box-shadow">
            <button
              className="button | button--edit"
              onClick={() => setEditPopupActive(true)}
            >
              Edit
            </button>
            <button
              className="button | button--delete"
              onClick={() => setDeletePopupActive(true)}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="product-details__body | bg-neutral-100 box-shadow">
          <div
            className="product__image"
            style={{
              backgroundImage: `url(
                ${product.imageURL}
              )`,
            }}
          ></div>
          <h3 className="product__title | fs-title fw-bold">
            {product.productName}
          </h3>
          <div className="product__price-alert">
            <div
              className="price-alert"
              onClick={() => setEmailAlertPopupActive(true)}
            >
              <img src={bellAlertIcon} className="icon" />
              <p className="text-neutral-500">
                Send price drop alert on{" "}
                <span
                  className="alert-email | fs-body fw-semi-bold text-neutral-900"
                  style={{ textDecoration: "underline" }}
                >
                  {alertEmail}
                </span>
              </p>
            </div>
            <div
              className="product__target-price | gap-sm"
              style={{ textAlign: "right" }}
            >
              <span className="fs-body-sm text-neutral-500">Target Price</span>
              <p className="fs-title fw-bold">
                <span>₹</span>
                {product.targetPrice}
              </p>
            </div>
          </div>
          <div className="product-details__footer | bg-neutral-200">
            <div className="product__curr-price | text-primary-400 gap-sm">
              <span className="fs-body-sm">Current Price</span>
              <p className="fs-title fw-bold">
                <span>₹</span>
                {product.currPrice}
              </p>
            </div>
            <a
              href={product.productURL}
              target="_blank"
              className="product__buy-link | fw-bold"
            >
              Buy{" "}
              <span className="product__buy-link-website">
                on {product.productSource}
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
