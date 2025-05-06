const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load .env variables

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// 🧪 Minimal test for MongoDB connection
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

// Optional test route
app.get("/", (req, res) => {
  res.send("Server is running and trying to connect to MongoDB.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
