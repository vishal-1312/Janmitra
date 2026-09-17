const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/", auth, commentController.addComment);
router.get("/:issueId", commentController.getCommentsByIssue);

module.exports = router;
