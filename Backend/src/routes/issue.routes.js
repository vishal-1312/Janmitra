const express = require("express");
const router = express.Router();
const issueController = require("../controllers/issue.controller");
const auth = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.middleware");
const role = require("../middlewares/role.middleware");

// Create issue (citizen)
router.post(
  "/",
  auth,
  upload.array("media", 5),
  issueController.createIssue
);

// Get all public issues
router.get("/", issueController.getAllIssues);

// Update issue status (admin/worker)
router.put(
  "/:id/status",
  auth,
  role("admin", "worker"),
  issueController.updateIssueStatus
);

module.exports = router;
