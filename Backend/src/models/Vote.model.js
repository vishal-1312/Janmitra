const mongoose = require("mongoose");

const VoteSchema = new mongoose.Schema(
  {
    issueId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue",
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

// Prevent duplicate votes
VoteSchema.index({ issueId: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model("Vote", VoteSchema);
