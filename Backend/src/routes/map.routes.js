const express = require("express");
const router = express.Router();
const Issue = require("../models/Issue.model");

// Get nearby issues (public)
router.get("/nearby", async (req, res) => {
  const { lat, lng, distance = 5000 } = req.query;

  const issues = await Issue.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [parseFloat(lng), parseFloat(lat)]
        },
        $maxDistance: parseInt(distance)
      }
    }
  });

  res.json({ success: true, issues });
});

module.exports = router;
