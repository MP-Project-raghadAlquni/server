const mongoose = require("mongoose");

const dossesSchema = new mongoose.Schema({
  insulineType1: { type: String },
  insulineType2: { type: String },
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
});

module.exports = mongoose.model("Dosses", dossesSchema);
