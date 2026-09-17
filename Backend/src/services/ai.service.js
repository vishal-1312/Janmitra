// src/services/ai.service.js

// Simple keyword-based classifier (can be replaced with ML model / API)
exports.autoCategorize = async (title, description) => {
  const text = `${title} ${description}`.toLowerCase();

  if (text.includes("pothole") || text.includes("road")) return "Roads";
  if (text.includes("garbage") || text.includes("waste")) return "Sanitation";
  if (text.includes("street light") || text.includes("electric")) return "Electricity";
  if (text.includes("water") || text.includes("leak") || text.includes("sewer")) return "Water Supply";

  return "General";
};
