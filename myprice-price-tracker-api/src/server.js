import express from "express";
const app = express();
const PORT = 5000;

import { data } from "./utils/SampleData";

app.get("/api", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => console.log(`server running on port : ${PORT}`));
