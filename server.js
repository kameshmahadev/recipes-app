// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const recipeRoutes = require("./routes/recipeRoutes"); // Recipes routes

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware to parse JSON
app.use(express.json());

// Root test route
app.get("/", (req, res) => {
  res.send("🍲 Welcome to the Recipes API! Ready to serve.");
});

// Mount recipe routes
app.use("/api/recipes", recipeRoutes);

// Global Error Handler (optional)
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ error: "Server Error", message: err.message });
});

// MongoDB connection and server start
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
