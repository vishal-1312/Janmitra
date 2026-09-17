// src/services/issue.service.js

const Issue = require("../models/Issue.model");
const SLA = require("../models/SLA.model");
const aiService = require("./ai.service");

exports.createIssueService = async ({ title, description, category, location, media, userId }) => {
  // Optional AI categorization
  const aiCategory = await aiService.autoCategorize(title, description);

  const issue = await Issue.create({
    title,
    description,
    category,
    location,
    media,
    createdBy: userId
  });

  // Create SLA (48 hours default)
  await SLA.create({
    issueId: issue._id,
    deadline: new Date(Date.now() + 48 * 60 * 60 * 1000)
  });

  return issue;
};

exports.updateIssueStatusService = async (issueId, status) => {
  return await Issue.findByIdAndUpdate(issueId, { status }, { new: true });
};
