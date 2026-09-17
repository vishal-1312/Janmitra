// src/config/env.js

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,

  MONGO_URI: process.env.MONGO_URI,

  JWT_SECRET: process.env.JWT_SECRET,

  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",

  NODE_ENV: process.env.NODE_ENV || "development",

  CLOUD_PROVIDER: process.env.CLOUD_PROVIDER || "aws"
};
