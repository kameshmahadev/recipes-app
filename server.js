const express = require('express');
const mongoose = require('mongoose');
const recipeRouter = require('./routes/recipeRouter');
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/recipesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/recipes', recipeRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
