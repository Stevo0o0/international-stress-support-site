// server.js
const express = require("express");
const path = require("path");
const app = express();

// Serve static files from current directory
app.use(express.static(path.join(__dirname, ".")));

// Fallback to index.html for root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start server: use PORT env (for hosting) or 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Site running on port ${PORT}`);
});
