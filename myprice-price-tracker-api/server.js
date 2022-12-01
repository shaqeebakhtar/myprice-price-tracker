const express = require("express");
const app = express();
const PORT = 5000;

const { data } = require("./SampleData.js");

app.get("/api", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => console.log(`server running on port : ${PORT}`));
