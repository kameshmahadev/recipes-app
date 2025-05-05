const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

// POST /api/recipes
router.post("/", createRecipe);

// GET /api/recipes
router.get("/", getAllRecipes);

// GET /api/recipes/:id
router.get("/:id", getRecipeById);

// PUT /api/recipes/:id
router.put("/:id", updateRecipe);

// DELETE /api/recipes/:id
router.delete("/:id", deleteRecipe);

module.exports = router;
