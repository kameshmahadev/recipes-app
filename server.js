const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // ✅ Correct path
const recipeRoutes = require("./routes/recipeRoutes");

dotenv.config(); // Load .env before using process.env

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/recipes", recipeRoutes);

// Connect to DB and start server
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
