// src/app.js

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

/* -------------------- MIDDLEWARES -------------------- */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/* -------------------- ROUTES -------------------- */
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/issues", require("./routes/issue.routes"));
app.use("/api/votes", require("./routes/vote.routes"));
app.use("/api/comments", require("./routes/comment.routes"));
app.use("/api/rewards", require("./routes/reward.routes"));
app.use("/api/sla", require("./routes/sla.routes"));
app.use("/api/admin", require("./routes/admin.routes"));
app.use("/api/map", require("./routes/map.routes"));
app.use("/api/categories", require("./routes/category.routes"));


/* -------------------- HEALTH CHECK -------------------- */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "JanMitr Backend API is running 🚀"
  });
});

app.get("/favicon.ico", (req, res) => res.status(204));

/* -------------------- ERROR HANDLER -------------------- */
const errorMiddleware = require("./middlewares/error.middleware");
app.use(errorMiddleware);

module.exports = app;
