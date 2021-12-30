const mongoose = require("mongoose");

const readingsSchema = new mongoose.Schema({
  beforeBreakfast: { type: String },
  afterBreakfast: { type: String },
  beforeLunch: { type: String },
  afterLunch: { type: String },
  beforeDinner: { type: String },
  afterDinner: { type: String },
  beforeSleep: { type: String },
  isDel: { type: Boolean, default: false },
  isRead: { type: Boolean, default: false },
  byUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  toDoctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: String, required: true },
});

module.exports = mongoose.model("Readings", readingsSchema);
