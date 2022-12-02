import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../../styles/Popup.css";

import { checkURL, checkName, checkPrice } from "../../utils/Validation";

const EditProductPopup = ({ setEditPopupActive, product }) => {
  const [track, setTrack] = useState(
    Object.freeze({
      productURL: product.productURL,
      productName: product.productName,
      productSource: product.productSource,
      targetPrice: product.targetPrice,
    })
  );
  console.log(product);

  // save track details
  const handleChange = (e) => {
    setTrack({ ...track, [e.target.name]: e.target.value.trim() });
    console.log(e.target.value.trim());
  };

  // check validity on submit
  // const isValidURL = () => {
  //   if (!track.productURL) {
  //     checkURL("Product URL is required");
  //     return false;
  //   }

  //   return true;
  // };

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

  const { productId } = useParams();

  const updateTrackDetails = async (productId) => {
    await axios
      .put(`/api/${productId}`, track)
      .then((res) => setEditPopupActive(false))
      .catch((err) => console.error(err));
  };

  const handleUpdate = () => {
    if (isValidName() && isValidPrice()) {
      updateTrackDetails(productId);
    }
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
                name="productURL"
                value={track.productURL}
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
                <label htmlFor="product-source">Product Website/App</label>
                <select
                  name="productSource"
                  id="product-source"
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
          <button className="button | button--save" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductPopup;
