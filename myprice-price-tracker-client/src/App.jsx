import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Tracklist from "./pages/track_list/Tracklist";
import ProductDetails from "./pages/product_details/ProductDetails";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/tracklist")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Tracklist data={data} />} />
        <Route exact path="products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
