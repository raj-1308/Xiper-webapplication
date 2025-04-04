require("dotenv").config();

const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());  // Allow JSON data
app.use(cors());          // Enable CORS


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((err) => console.log("❌ Database connection error:", err));

// Import Auth Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);



app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  }).on("error", (err) => {
    console.error("❌ Server failed to start:", err);
  });


  app.get("/", (req, res) => {
    res.send("✅ Server is running!");
  });
  
  