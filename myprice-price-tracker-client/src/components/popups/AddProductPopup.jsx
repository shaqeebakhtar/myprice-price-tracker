import React, { useState } from "react";
import axios from "axios";

import "../../styles/Popup.css";

import { checkURL, checkName, checkPrice } from "../../utils/Validation";

const AddProductPopup = ({ setAddPopupActive }) => {
  const [track, setTrack] = useState(
    Object.freeze({
      productURL: null,
      productName: null,
      productSource: "Amazon",
      targetPrice: null,
    })
  );

  // save track details
  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    setTrack({ ...track, [e.target.name]: e.target.value.trim() });
  };

  // check validity on submit
  const isValidURL = () => {
    if (!track.productURL) {
      checkURL("Product URL is required");
      return false;
    }

    return true;
  };

  const isValidName = () => {
    if (!track.productName) {
      checkName("Product name is required");
      return false;
    }

    return true;
  };

  const isValidPrice = () => {
    if (!track.targetPrice) {
      checkPrice("Target price is required");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (isValidURL() && isValidName() && isValidPrice()) {
      await axios
        .post("/api/track", track)
        .then((res) => {
          console.log(res);
          setAddPopupActive(false);
        })
        .catch((err) => console.error(err));
    }
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
                name="productURL"
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
                <label htmlFor="product-source"> Website/App</label>
                <select
                  name="productSource"
                  id="product-source"
                  required
                  onChange={handleChange}
                >
                  <option value="Amazon" defaultValue>
                    Amazon
                  </option>
                  <option value="Flipkart">Flipkart</option>
                  <option value="Myntra">Myntra</option>
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
