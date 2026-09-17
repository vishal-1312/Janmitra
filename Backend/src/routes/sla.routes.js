const express = require("express");
const router = express.Router();
const slaController = require("../controllers/sla.controller");
const auth = require("../middlewares/auth.middleware");

// Get SLA details of an issue
router.get("/:issueId", auth, slaController.getSLAByIssue);

module.exports = router;
