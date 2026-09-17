// src/routes/category.routes.js

const express = require("express");
const router = express.Router();
const Category = require("../models/Category.model");
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

// Create category (admin only)
router.post("/", auth, role("admin"), async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({ success: true, category });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all categories (public)
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json({ success: true, categories });
});

module.exports = router;
