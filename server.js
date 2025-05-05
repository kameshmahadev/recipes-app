const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRouter');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/recipes', recipeRoutes);

// Connect to DB and start server
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
