const express = require("express");
const { newAppointment, getAppointments, getDoneAppointments, getOneAppointment } = require("./../controller/appointment");
const appointmentRouter = express.Router();

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

appointmentRouter.post("/appointment/:forUser", authentication, newAppointment);
appointmentRouter.get("/appointments/:patientId", getAppointments);
appointmentRouter.get("/appointmentsDone/:patientId", getDoneAppointments);
appointmentRouter.get("/appointment/:patientId/:appointmentId", getOneAppointment);


module.exports = appointmentRouter;
