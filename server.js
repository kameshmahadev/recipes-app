const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // 👈 connect to DB before anything else

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/recipes', require('./routes/recipeRoutes'));

// Default
app.get('/', (req, res) => {
  res.send('Welcome to the Recipes API');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
