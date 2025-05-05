const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // ✅ Assuming db.js is in config folder
const recipeRoutes = require("./routes/recipeRoutes");

dotenv.config(); // ✅ Load environment variables

const app = express();

// Connect to MongoDB using db.js
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/recipes", recipeRoutes);

// Start server (use Render's dynamic port or fallback to 5000 locally)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
