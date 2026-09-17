const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["citizen", "worker", "admin"],
      default: "citizen"
    },
    points: { type: Number, default: 0 },
    level: { type: String, default: "Beginner" },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
