// Required Modules
require("dotenv").config();
require("colors");
const express = require("express");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

// Database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`BACKEND SERVER STARTED ON PORT ${PORT}.`));
