import React, { useState } from "react";

import "../../styles/Popup.css";

import { checkURL, checkName, checkPrice } from "../../utils/Validation";

const AddProductPopup = ({ setAddPopupActive }) => {
  const [track, setTrack] = useState({
    productUrl: null,
    productName: null,
    productSource: "Amazon",
    targetPrice: null,
  });

  // save track details
  const handleChange = (e) => {
    setTrack({ ...track, [e.target.name]: e.target.value.trim() });
  };

  // set details on localstorage
  const addProduct = () => {
    let existingData = JSON.parse(localStorage.getItem("data"));
    if (!existingData) existingData = [];
    existingData.push(track);
    localStorage.setItem("data", JSON.stringify(existingData));
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
    if (checkValidity()) if (addProduct()) setAddPopupActive(false);
  };

  return (
    <div className="popup-backdrop">
      <div className="popup | bg-neutral-100">
        <div className="popup__header">
          <h3 className="fs-title fw-bold">Add Product</h3>
        </div>
        <div className="popup__body">
          <form action="#" className="gap">
            <div className="form-input">
              <label htmlFor="product-url">Product URL</label>
              <input
                type="text"
                id="product-url"
                name="productUrl"
                placeholder="e.g. https://www.amazon.com/leather-jacket/"
                required
                onChange={(e) => {
                  handleChange(e);
                  checkURL("Please enter a valid URL");
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
                <label htmlFor="product-website"> Website/App</label>
                <select
                  name="productWebsite"
                  id="product-website"
                  required
                  onChange={handleChange}
                >
                  <option value="amazon" selected>
                    Amazon
                  </option>
                  <option value="flipkart">Flipkart</option>
                  <option value="myntra">Myntra</option>
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
            onClick={() => setAddPopupActive(false)}
          >
            Cancel
          </button>
          <button className="button | button--save" onClick={handleSubmit}>
            Track Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductPopup;
