const Comment = require("../models/Comment.model");

exports.addComment = async (req, res, next) => {
  try {
    const comment = await Comment.create({
      issueId: req.body.issueId,
      userId: req.user.id,
      text: req.body.text
    });

    res.status(201).json({ success: true, comment });
  } catch (error) {
    next(error);
  }
};

exports.getCommentsByIssue = async (req, res, next) => {
  try {
    const comments = await Comment.find({ issueId: req.params.issueId })
      .populate("userId", "name");

    res.json({ success: true, comments });
  } catch (error) {
    next(error);
  }
};
