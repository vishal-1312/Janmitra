const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },
      coordinates: {
        type: [Number], // [lng, lat]
        required: true
      }
    },

    media: [{ type: String }],

    status: {
      type: String,
      enum: ["pending", "in-progress", "resolved", "overdue"],
      default: "pending"
    },

    votesCount: { type: Number, default: 0 },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

// Geo index for map queries
IssueSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Issue", IssueSchema);
