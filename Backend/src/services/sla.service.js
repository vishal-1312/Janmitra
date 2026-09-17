// src/services/sla.service.js

const SLA = require("../models/SLA.model");

exports.createSLAService = async ({ issueId, hours = 48 }) => {
  return await SLA.create({
    issueId,
    deadline: new Date(Date.now() + hours * 60 * 60 * 1000)
  });
};

exports.markSLABreachedService = async (issueId) => {
  return await SLA.findOneAndUpdate(
    { issueId },
    { breached: true },
    { new: true }
  );
};
