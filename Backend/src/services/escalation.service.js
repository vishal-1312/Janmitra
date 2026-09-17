// src/services/escalation.service.js

const Escalation = require("../models/Escalation.model");

exports.createEscalation = async ({ issueId, level, escalatedTo }) => {
  return await Escalation.create({
    issueId,
    level,
    escalatedTo
  });
};
