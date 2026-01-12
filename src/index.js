const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// This endpoint is used to check if the app is alive/healthy
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// This is the main page
app.get("/", (req, res) => {
  res.status(200).send("Hello! CI/CD + Docker + Kubernetes are working 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
