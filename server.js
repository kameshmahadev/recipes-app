const express = require('express');
const mongoose = require('mongoose');
const recipeRouter = require('./routes/recipeRouter');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/recipesDB')
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch(err => console.error('❌ MongoDB connection failed:', err));

app.use('/api/recipes', recipeRouter);

app.listen(5000, () => {
    console.log('🚀 Server running on port 5000');
});
