const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  day: { type: String, required: true },
  date: { type: Date, required: true },
  hours: { type: String, required: true },
  forUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  byDoctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  clinic: { type: String },
  isDone: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
