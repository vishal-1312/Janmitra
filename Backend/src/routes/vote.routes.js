const express = require("express");
const router = express.Router();
const voteController = require("../controllers/vote.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/", auth, voteController.voteIssue);

module.exports = router;
