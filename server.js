const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');
const app = express();

app.use(express.json());
app.use(recipeRoutes);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/recipesDB')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.listen(5000, () => {
  console.log('🚀 Server is running on http://localhost:5000');
});
