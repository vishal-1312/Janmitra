const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

// Dashboard stats
router.get("/dashboard", auth, role("admin"), adminController.getDashboardStats);

// Hall of Shame (overdue issues)
router.get("/hall-of-shame", auth, role("admin"), adminController.getHallOfShame);

module.exports = router;
