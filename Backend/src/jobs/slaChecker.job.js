// src/jobs/slaChecker.job.js

const cron = require("node-cron");
const Issue = require("../models/Issue.model");
const SLA = require("../models/SLA.model");
const Escalation = require("../models/Escalation.model");

const checkSLA = async () => {
  try {
    const now = new Date();

    const slas = await SLA.find({
      deadline: { $lt: now },
      breached: false
    });

    for (let sla of slas) {
      // Mark SLA as breached
      sla.breached = true;
      await sla.save();

      // Mark issue as overdue
      const issue = await Issue.findByIdAndUpdate(
        sla.issueId,
        { status: "overdue" },
        { new: true }
      );

      if (!issue) continue;

      // Decide escalation level
      const hoursOverdue =
        (now - sla.deadline) / (1000 * 60 * 60);

      let level = "L1";
      let escalatedTo = "Ward Officer";

      if (hoursOverdue >= 72 && hoursOverdue < 168) {
        level = "L2";
        escalatedTo = "Department Head";
      } else if (hoursOverdue >= 168 && hoursOverdue < 336) {
        level = "L3";
        escalatedTo = "Municipal Commissioner";
      } else if (hoursOverdue >= 336) {
        level = "L4";
        escalatedTo = "Hall of Shame";
      }

      await Escalation.create({
        issueId: issue._id,
        level,
        escalatedTo,
        escalatedAt: now
      });

      console.log(
        `⚠ SLA breached | Issue: ${issue._id} | Level: ${level}`
      );
    }
  } catch (error) {
    console.error("❌ SLA Checker Job Error:", error.message);
  }
};

/* -------------------- CRON SCHEDULE -------------------- */
// Runs every 1 hour
cron.schedule("0 * * * *", checkSLA);

module.exports = checkSLA;
