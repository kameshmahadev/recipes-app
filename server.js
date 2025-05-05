const express = require("express");
const mongoose = require("mongoose");
const recipeRoutes = require("./routes/recipeRoutes"); // ✅ Path to routes
const app = express();

// Middleware
app.use(express.json());

// Use Routes
app.use("/api/recipes", recipeRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/recipesDB")
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(5000, () => console.log("🚀 Server is running on http://localhost:5000"));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
