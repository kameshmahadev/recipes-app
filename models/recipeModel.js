const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: [String],
  instructions: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
