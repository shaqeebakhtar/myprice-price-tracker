import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Tracklist from "./pages/track_list/Tracklist";
import ProductDetails from "./pages/product_details/ProductDetails";
import PageNotFound from "./components/PageNotFound";
import { data } from "./utils/SampleData";

// const data = JSON.parse(localStorage.getItem("data"));

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Tracklist data={data} />} />
        <Route
          exact
          path="product/:productName"
          element={<ProductDetails data={data} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
