const express = require('express');
const router = express.Router();

// ✅ Import your controller functions
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipeController'); // ✅ Make sure this path is correct

// ✅ Define routes
router.post('/', createRecipe);
router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;
