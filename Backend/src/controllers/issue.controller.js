const Issue = require("../models/Issue.model");
const SLA = require("../models/SLA.model");

exports.createIssue = async (req, res, next) => {
  try {
    const issue = await Issue.create({
      ...req.body,
      createdBy: req.user.id,
      status: "pending"
    });

    // Create SLA
    await SLA.create({
      issueId: issue._id,
      startTime: new Date(),
      deadline: new Date(Date.now() + 48 * 60 * 60 * 1000)
    });

    res.status(201).json({ success: true, issue });
  } catch (error) {
    next(error);
  }
};

exports.getAllIssues = async (req, res, next) => {
  try {
    const issues = await Issue.find().populate("createdBy category");
    res.json({ success: true, issues });
  } catch (error) {
    next(error);
  }
};

exports.updateIssueStatus = async (req, res, next) => {
  try {
    const issue = await Issue.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json({ success: true, issue });
  } catch (error) {
    next(error);
  }
};
