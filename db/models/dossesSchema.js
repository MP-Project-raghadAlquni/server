const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const dossesSchema = new mongoose.Schema({
  insulineType1: { type: String, required: true},
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
  note: { type: String },
  insulineType1Dosses: { type: String , required: true},
  insulineType2Dosses: { type: String },


});

module.exports = mongoose.model("Dosses", dossesSchema);
