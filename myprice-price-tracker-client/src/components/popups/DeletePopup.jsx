import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../../styles/Popup.css";

const DeletePopup = ({ setDeletePopupActive, productName, productId }) => {
  const navigate = useNavigate();

  const handleDelete = (productId) => {
    axios
      .delete(`/api/${productId}`)
      .then((res) => {
        setDeletePopupActive(false);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="popup-backdrop">
      <div className="popup | bg-neutral-100">
        <div className="popup__header">
          <h3 className="fs-title fw-bold">Confirm Deletion</h3>
        </div>
        <div className="popup__body">
          <p className="text-neutral-500">
            Are you sure you want to delete{" "}
            <span className="delete-product | fw-semi-bold text-neutral-900">
              {productName}
            </span>{" "}
            ? This action cannot be undone.
          </p>
        </div>
        <div className="popup__footer">
          <button
            className="button | button--cancel"
            onClick={() => setDeletePopupActive(false)}
          >
            Cancel
          </button>
          <button
            className="button | button--delete"
            onClick={() => handleDelete(productId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
