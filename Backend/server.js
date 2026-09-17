// server.js

const http = require("http");
const mongoose = require("mongoose");
const app = require("./src/app");
const initRealtimeSocket = require("./src/sockets/realtime.socket");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;

/* -------------------- DATABASE CONNECTION -------------------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  });

/* -------------------- SERVER -------------------- */
const server = http.createServer(app);

/* -------------------- SOCKET.IO -------------------- */
initRealtimeSocket(server);

/* -------------------- CRON JOBS -------------------- */
require("./src/jobs/slaChecker.job");
require("./src/jobs/rewardUpdater.job");

/* -------------------- START SERVER -------------------- */
server.listen(PORT, () => {
  console.log(`🚀 JanMitr server running on port ${PORT}`);
});
