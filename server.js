const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes'); // adjust path if needed
const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON
app.use('/api/recipes', recipeRoutes); // Mount routes

mongoose.connect('mongodb://127.0.0.1:27017/recipesDB')
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
