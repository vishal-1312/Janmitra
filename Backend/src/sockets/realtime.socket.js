// src/sockets/realtime.socket.js

const { Server } = require("socket.io");

/**
 * Initialize realtime socket server
 * @param {http.Server} server
 */
const initRealtimeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*", // In production, replace with your frontend domain
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log("🔌 Client connected:", socket.id);

    /**
     * Client joins room based on city/ward or issueId
     * Example: socket.emit("join-room", { room: "city-delhi" })
     */
    socket.on("join-room", ({ room }) => {
      socket.join(room);
      console.log(`👥 Socket ${socket.id} joined room: ${room}`);
    });

    /**
     * Broadcast new issue to all users (or specific city room)
     */
    socket.on("new-issue", (data) => {
      // data = { issueId, title, location, city }
      io.emit("issue-created", data);
    });

    /**
     * Broadcast issue status updates
     */
    socket.on("issue-status-update", (data) => {
      // data = { issueId, status }
      io.emit("issue-updated", data);
    });

    /**
     * Broadcast new comments on an issue
     */
    socket.on("new-comment", (data) => {
      // data = { issueId, comment }
      io.emit("comment-added", data);
    });

    /**
     * Broadcast vote updates
     */
    socket.on("vote-updated", (data) => {
      // data = { issueId, votesCount }
      io.emit("vote-changed", data);
    });

    /**
     * Notify specific user (private notification)
     */
    socket.on("notify-user", ({ userId, notification }) => {
      io.to(userId).emit("private-notification", notification);
    });

    /**
     * Join private user room (for notifications)
     */
    socket.on("join-user", ({ userId }) => {
      socket.join(userId);
      console.log(`🔐 Socket ${socket.id} joined private room: ${userId}`);
    });

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected:", socket.id);
    });
  });

  return io;
};

module.exports = initRealtimeSocket;
