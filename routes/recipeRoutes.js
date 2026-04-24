const express = require("express");
const router = express.Router();

const {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

router.post("/", createRecipe);
router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

module.exports = router;
