const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fileNumber: { type: String, required: true, unique: true },
  avatar: {
    type: String,
    defalt:
      "https://cdn5.vectorstock.com/i/1000x1000/99/94/default-avatar-placeholder-profile-icon-male-vector-23889994.jpg",
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
