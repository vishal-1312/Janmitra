const Reward = require("../models/Reward.model");
const User = require("../models/User.model");

exports.addReward = async (req, res, next) => {
  try {
    const { userId, points, reason } = req.body;

    await Reward.create({ userId, points, reason });
    await User.findByIdAndUpdate(userId, { $inc: { points } });

    res.json({ success: true, message: "Reward added" });
  } catch (error) {
    next(error);
  }
};
