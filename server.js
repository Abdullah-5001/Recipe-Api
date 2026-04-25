const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db.js");
const recipeRoutes = require("./routes/recipeRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/recipes", recipeRoutes);
app.use("/", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
