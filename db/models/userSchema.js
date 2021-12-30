const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fileNumber: { type: String, required: true, unique: true },
  avatar: {
    type: String,
    default:
      "https://www.rentorride.com/assets/photos/avatar.png",
  },
  fullName: { type: String, require: true },
  internationalId: { type: String, require: true },
  diabetesType: { type: String, require: true },
  password: { type: String },
  email: { type: String, unique: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  phoneNumber: { type: String },
  age: { type: Number },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  status: { type: mongoose.Schema.Types.ObjectId, ref: "Status" },
  certificates: { type: Array },
  letter: { type: String },
  license: { type: String},
  gender: { type: String, require: true },

});

module.exports = mongoose.model("User", userSchema);
