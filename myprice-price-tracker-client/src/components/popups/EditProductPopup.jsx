import React, { useState } from "react";

import "../../styles/Popup.css";

import { checkURL, checkName, checkPrice } from "../../utils/Validation";

const EditProductPopup = ({ setEditPopupActive, product }) => {
  const [track, setTrack] = useState({
    productUrl: product.productURL,
    productName: product.productName,
    productSource: product.productSource,
    targetPrice: product.targetPrice,
  });

  // save track details
  const handleChange = (e) => {
    setTrack({ ...track, [e.target.name]: e.target.value.trim() });
  };

  // check validity on submit
  const checkValidity = () => {
    track.productUrl
      ? checkURL("Please enter a valid URL")
      : checkURL("Product URL is required");
    track.productName
      ? checkName("Please enter product name")
      : checkName("Product name is required");
    track.targetPrice
      ? checkPrice("Please enter your target price")
      : checkPrice("Target price is required");
  };

  const handleSubmit = () => {
    checkValidity();
  };

  return (
    <div className="popup-backdrop">
      <div className="popup | bg-neutral-100">
        <div className="popup__header">
          <h3 className="fs-title fw-bold">Edit Product</h3>
        </div>
        <div className="popup__body">
          <form action="#" className="gap">
            <div className="form-input">
              <label htmlFor="product-url">Product URL</label>
              <input
                type="text"
                id="product-url"
                name="productUrl"
                value={track.productUrl}
                placeholder="e.g. https://www.amazon.com/leather-jacket/"
                required
                disabled
                style={{
                  color: "var(--clr-neutral-300)",
                  cursor: "not-allowed",
                }}
              />
              <span className="input-error | fs-body-sm"></span>
            </div>

            <div className="form-input">
              <label htmlFor="product-name">Product Name</label>
              <input
                type="text"
                id="product-name"
                name="productName"
                value={track.productName}
                placeholder="e.g. Leather Jacket"
                required
                onChange={(e) => {
                  handleChange(e);
                  checkName("Please enter product name");
                }}
              />
              <span className="input-error | fs-body-sm"></span>
            </div>
            <div className="source-target">
              <div className="form-input">
                <label htmlFor="product-website">Product Website/App</label>
                <select
                  name="productWebsite"
                  id="product-website"
                  onChange={handleChange}
                >
                  <option
                    value="Amazon"
                    selected={product.productSource === "Amazon"}
                  >
                    Amazon
                  </option>

                  <option
                    value="Flipkart"
                    selected={product.productSource === "Flipkart"}
                  >
                    Flipkart
                  </option>

                  <option
                    value="Myntra"
                    selected={product.productSource === "Myntra"}
                  >
                    Myntra
                  </option>
                </select>
              </div>
              <div className="form-input">
                <label htmlFor="target-price">Target Price</label>
                <input
                  type="number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  id="target-price"
                  name="targetPrice"
                  value={track.targetPrice}
                  placeholder="e.g. 1,699"
                  required
                  onChange={(e) => {
                    handleChange(e);
                    checkPrice("Please enter your target price");
                  }}
                />
                <span className="input-error | fs-body-sm"></span>
              </div>
            </div>
          </form>
        </div>
        <div className="popup__footer">
          <button
            className="button | button--cancel"
            onClick={() => setEditPopupActive(false)}
          >
            Cancel
          </button>
          <button className="button | button--save" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductPopup;
