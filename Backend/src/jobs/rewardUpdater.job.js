// src/jobs/rewardUpdater.job.js

const cron = require("node-cron");
const Reward = require("../models/Reward.model");
const User = require("../models/User.model");
const Issue = require("../models/Issue.model");
const Comment = require("../models/Comment.model");

const updateRewards = async () => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    /* -------- Reward Issue Creators (Resolved Issues) -------- */
    const resolvedIssues = await Issue.find({
      status: "resolved",
      updatedAt: { $gte: today }
    });

    for (let issue of resolvedIssues) {
      await Reward.create({
        userId: issue.createdBy,
        points: 20,
        reason: "Issue successfully resolved"
      });

      await User.findByIdAndUpdate(issue.createdBy, {
        $inc: { points: 20 }
      });
    }

    /* -------- Reward Comment Contributors -------- */
    const comments = await Comment.find({
      createdAt: { $gte: today }
    });

    for (let comment of comments) {
      await Reward.create({
        userId: comment.userId,
        points: 5,
        reason: "Active civic participation (comment)"
      });

      await User.findByIdAndUpdate(comment.userId, {
        $inc: { points: 5 }
      });
    }

    console.log("🎁 Rewards updated successfully");
  } catch (error) {
    console.error("❌ Reward Updater Job Error:", error.message);
  }
};

/* -------------------- CRON SCHEDULE -------------------- */
// Runs every day at 12:00 AM
cron.schedule("0 0 * * *", updateRewards);

module.exports = updateRewards;
