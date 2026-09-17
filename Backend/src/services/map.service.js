// src/services/map.service.js

const Issue = require("../models/Issue.model");

exports.getNearbyIssues = async ({ lat, lng, distance = 5000 }) => {
  return await Issue.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat]
        },
        $maxDistance: distance
      }
    }
  });
};
