const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.get("/health", (req, res) => {
  res.json({ status: "UP", message: "System running smoothly" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
