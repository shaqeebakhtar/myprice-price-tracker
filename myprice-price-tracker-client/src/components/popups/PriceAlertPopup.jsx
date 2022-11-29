import React, { useState } from "react";

import "../../styles/Popup.css";

import { checkEmail } from "../../utils/Validation";

const PriceAlertPopup = ({
  setEmailAlertPopupActive,
  alertEmail,
  setAlertEmail,
}) => {
  // check validity on submit
  const handleSubmit = () => {
    alertEmail
      ? checkEmail("Please enter a valid email")
      : checkEmail("Email is required");
    setAlertEmail(alertEmail, setEmailAlertPopupActive(false));
  };

  return (
    <div className="popup-backdrop">
      <div className="popup | bg-neutral-100">
        <div className="popup__header">
          <h3 className="fs-title fw-bold">Add Price Alert Email</h3>
        </div>
        <div className="popup__body">
          <form action="#" className="gap">
            <div className="form-input">
              <label htmlFor="alert-email">Email</label>
              <input
                type="email"
                id="alert-email"
                name="alert-email"
                value={alertEmail}
                placeholder="e.g. email@domain.com"
                required
                onChange={(e) => {
                  setAlertEmail(e.target.value.trim());
                  checkEmail("Please enter a valid email");
                }}
              />
              <span className="input-error | fs-body-sm"></span>
            </div>
            <div className="form-checkbox">
              <input
                type="checkbox"
                name="default-alert-email"
                id="default-alert-email"
              />
              <span className="check"></span>
              <label
                htmlFor="default-alert-email"
                className="fs-body-sm text-neutral-500"
              >
                Send price alert to this email for every product
              </label>
            </div>
          </form>
        </div>
        <div className="popup__footer">
          <button
            className="button | button--cancel"
            onClick={() => setEmailAlertPopupActive(false)}
          >
            Cancel
          </button>
          <button className="button | button--save" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceAlertPopup;
