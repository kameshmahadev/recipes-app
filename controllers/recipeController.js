const Recipe = require('../models/recipeModel');

// GET all recipes
const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
};

// POST create new recipe
const createRecipe = async (req, res) => {
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.status(201).json(newRecipe);
};

module.exports = { getAllRecipes, createRecipe };
