const express = require("express");
const router = express.Router();
const rewardController = require("../controllers/reward.controller");
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

// Only admin can manually assign rewards
router.post("/", auth, role("admin"), rewardController.addReward);

module.exports = router;
