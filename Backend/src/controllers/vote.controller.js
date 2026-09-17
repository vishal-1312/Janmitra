const Vote = require("../models/Vote.model");
const Issue = require("../models/Issue.model");

exports.voteIssue = async (req, res, next) => {
  try {
    const { issueId } = req.body;

    const alreadyVoted = await Vote.findOne({
      userId: req.user.id,
      issueId
    });

    if (alreadyVoted)
      return res.status(400).json({ message: "Already voted" });

    await Vote.create({ userId: req.user.id, issueId });
    await Issue.findByIdAndUpdate(issueId, { $inc: { votesCount: 1 } });

    res.json({ success: true, message: "Vote added" });
  } catch (error) {
    next(error);
  }
};
