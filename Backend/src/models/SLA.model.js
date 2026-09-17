const mongoose = require("mongoose");

const SLASchema = new mongoose.Schema(
  {
    issueId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue",
      required: true,
      unique: true
    },
    startTime: { type: Date, default: Date.now },
    deadline: { type: Date, required: true },
    breached: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("SLA", SLASchema);
