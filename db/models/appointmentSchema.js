const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({

    Date: { type : Date, required: true },
    forUser: { type : mongoose.Schema.Types.ObjectId, ref: "User" },
    byDoctor: { type : mongoose.Schema.Types.ObjectId, ref: "User" },
    clinic: { type : String },
    isDone: { type : Boolean, default: false },
    
    });

module.exports = mongoose.model("Appointment", appointmentSchema);
