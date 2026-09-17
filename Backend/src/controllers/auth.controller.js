const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

exports.register = async (req, res, next) => {
  try {
    const { name, phone, role } = req.body;

    const existingUser = await User.findOne({ phone });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, phone, role });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });

    res.status(201).json({ success: true, token, user });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { phone } = req.body;

    const user = await User.findOne({ phone });
    if (!user)
      return res.status(404).json({ message: "User not found" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });

    res.json({ success: true, token, user });
  } catch (error) {
    next(error);
  }
};
