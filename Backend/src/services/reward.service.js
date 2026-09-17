// src/services/reward.service.js

const Reward = require("../models/Reward.model");
const User = require("../models/User.model");

exports.addRewardService = async ({ userId, points, reason }) => {
  await Reward.create({ userId, points, reason });
  await User.findByIdAndUpdate(userId, { $inc: { points } });
};
