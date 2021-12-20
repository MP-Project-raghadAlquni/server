const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fileNumber: { type: String, required: true, unique: true },
  avatar: {
    type: String,
    defalt:
      "https://cdn5.vectorstock.com/i/1000x1000/99/94/default-avatar-placeholder-profile-icon-male-vector-23889994.jpg",
  },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  password: { type: String, require: true, defult: "12345" },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  phoneNumber: { type: Boolean, defalt: false },
  age: { type: Number },
  doctor: { type: String },
  isDel: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
