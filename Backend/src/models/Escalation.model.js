const mongoose = require("mongoose");

const EscalationSchema = new mongoose.Schema(
  {
    issueId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue",
      required: true
    },
    level: {
      type: String,
      enum: ["L1", "L2", "L3", "L4"],
      required: true
    },
    escalatedTo: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Escalation", EscalationSchema);
