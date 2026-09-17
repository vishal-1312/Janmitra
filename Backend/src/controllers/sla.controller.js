const SLA = require("../models/SLA.model");

exports.getSLAByIssue = async (req, res, next) => {
  try {
    const sla = await SLA.findOne({ issueId: req.params.issueId });
    res.json({ success: true, sla });
  } catch (error) {
    next(error);
  }
};
