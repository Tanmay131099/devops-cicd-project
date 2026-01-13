const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Main endpoint
app.get("/", (req, res) => {
  res.status(200).send("Hello! CI/CD + Docker + Kubernetes are working 🚀");
});

/**
 * IMPORTANT:
 * Only start the server if this file is run directly.
 * If the file is imported (for tests), DO NOT listen on a port.
 */
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the app for testing
module.exports = app;
