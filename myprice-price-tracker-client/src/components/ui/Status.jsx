import React from "react";

export const StatusHigher = () => {
  return (
    <div className="status status--higher | fw-semi-bold fs-body">
      <span className="status__circle"></span>Higher
    </div>
  );
};

export const StatusLower = () => {
  return (
    <div className="status status--lower | fw-semi-bold fs-body">
      <span className="status__circle"></span>Lower
    </div>
  );
};
