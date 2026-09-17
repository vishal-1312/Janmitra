// src/utils/constants.js

module.exports = {
  ROLES: {
    CITIZEN: "citizen",
    WORKER: "worker",
    ADMIN: "admin"
  },

  ISSUE_STATUS: {
    PENDING: "pending",
    IN_PROGRESS: "in-progress",
    RESOLVED: "resolved",
    OVERDUE: "overdue"
  },

  ESCALATION_LEVELS: {
    L1: "L1",
    L2: "L2",
    L3: "L3",
    L4: "L4"
  },

  DEFAULT_SLA_HOURS: 48,

  MESSAGES: {
    AUTH_REQUIRED: "Authentication required",
    ACCESS_DENIED: "Access denied",
    SERVER_ERROR: "Internal Server Error",
    ISSUE_CREATED: "Issue created successfully",
    ISSUE_UPDATED: "Issue updated successfully",
    VOTE_ADDED: "Vote added successfully"
  }
};
