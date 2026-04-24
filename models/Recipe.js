const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for the recipe"],
      trim: true,
      maxLength: [100, "Title cannot be more than 100 characters"],
    },
    ingredients: {
      type: [String],
      default: [],
      required: [true, "Please provide ingredients for the recipe"],
    },
    instructions: {
      type: String,
      required: [true, "Please provide the instructions for the recipe"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
