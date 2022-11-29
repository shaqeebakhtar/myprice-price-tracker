import React, { useState } from "react";

import "../../styles/Tracklist.css";

import Header from "../../components/header";
import ProductTrack from "../../components/ProductTrack";
import AddProductPopup from "../../components/popups/AddProductPopup";
import EmptyState from "../../components/EmptyState";

import plusIcon from "../../assets/plus-small.svg";

const Tracklist = ({ data }) => {
  const [addPopupActive, setAddPopupActive] = useState(false);

  if (addPopupActive) {
    document.body.classList.add("popup-active");
  } else {
    document.body.classList.remove("popup-active");
  }

  return (
    <>
      <Header />
      <div className="tracklist | container">
        {addPopupActive && (
          <AddProductPopup setAddPopupActive={setAddPopupActive} />
        )}
        <header className="tracklist__header">
          <h2 className="tracklist__title | fs-title-lg fw-bold">Tracklist</h2>
          <button
            className="button button--add"
            onClick={() => setAddPopupActive(true)}
          >
            <img src={plusIcon} className="icon" />
            Add Product
          </button>
        </header>
      </div>

      {data ? (
        <div className="product-track__container | container">
          <p
            className="tracklist__count | fs-body text-neutral-500"
            style={{ marginBottom: "0.5em" }}
          >
            Total{" "}
            <span className="fw-semi-bold text-neutral-900">
              {data.length} products
            </span>{" "}
            in tracklist
          </p>
          {data.map((product) => {
            return <ProductTrack product={product} key={product.id} />;
          })}
        </div>
      ) : (
        <EmptyState />
      )}
    </>
  );
};

export default Tracklist;
