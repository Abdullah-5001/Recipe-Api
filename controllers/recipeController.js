const Recipe = require("../models/Recipe.js");

const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json({ success: true, data: recipe });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    if (recipes.length > 0) {
      res.status(200).json({ success: true, data: recipes });
    } else {
      res.status(404).json({ success: false, message: "No recipes found" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (recipe) {
      res.status(200).json({ success: true, data: recipe });
    } else {
      res.status(404).json({ success: false, message: "Recipe not found" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (updatedRecipe) {
      res.status(200).json({
        success: true,
        message: "Recipe updated successfully",
        data: updatedRecipe,
      });
    } else {
      res.status(404).json({ success: false, message: "Recipe not found" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    if (deletedRecipe) {
      res
        .status(200)
        .json({ success: true, message: "Recipe deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Recipe not found" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
