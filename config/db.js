const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URI);
    if (con) {
      console.log("Database connected successfully");
    }
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
