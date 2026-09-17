// src/services/notification.service.js

const Notification = require("../models/Notification.model");

exports.sendNotification = async ({ userId, title, message }) => {
  return await Notification.create({
    userId,
    title,
    message
  });
};
