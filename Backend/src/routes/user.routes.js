const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const User = require("../models/User.model");

// Get own profile
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-__v");
  res.json({ success: true, user });
});

// Update profile (name only)
router.put("/me", auth, async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { name: req.body.name },
    { new: true }
  );
  res.json({ success: true, user });
});

module.exports = router;
