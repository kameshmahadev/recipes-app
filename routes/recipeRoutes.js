const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

// GET all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new recipe
router.post('/', async (req, res) => {
  const { name, ingredients, instructions } = req.body;
  try {
    const newRecipe = new Recipe({ name, ingredients, instructions });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update recipe
router.put('/:id', async (req, res) => {
  const { name, ingredients, instructions } = req.body;
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { name, ingredients, instructions },
      { new: true }
    );
    if (!updatedRecipe) return res.status(404).json({ message: 'Not found' });
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE recipe
router.delete('/:id', async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
