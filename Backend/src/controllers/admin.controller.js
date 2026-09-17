const Issue = require("../models/Issue.model");

exports.getDashboardStats = async (req, res, next) => {
  try {
    const totalIssues = await Issue.countDocuments();
    const resolved = await Issue.countDocuments({ status: "resolved" });
    const overdue = await Issue.countDocuments({ status: "overdue" });

    res.json({
      success: true,
      totalIssues,
      resolved,
      overdue
    });
  } catch (error) {
    next(error);
  }
};

exports.getHallOfShame = async (req, res, next) => {
  try {
    const issues = await Issue.find({ status: "overdue" })
      .populate("createdBy category");

    res.json({ success: true, issues });
  } catch (error) {
    next(error);
  }
};
