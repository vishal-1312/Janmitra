const mongoose = require("mongoose");

const RewardSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    points: { type: Number, required: true },
    reason: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reward", RewardSchema);
