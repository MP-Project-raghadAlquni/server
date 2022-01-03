const express = require("express");
const { newAppointment, getAppointments, getDoneAppointments, getOneAppointment, getAppointmentsForDoctors, getAppointmentOneUser } = require("./../controller/appointment");
const appointmentRouter = express.Router();

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

appointmentRouter.post("/appointment/:forUser", authentication, newAppointment);
// appointmentRouter.post("/appointment", authentication, newAppointmentDoctor);
appointmentRouter.get("/appointments", authentication ,getAppointments);
appointmentRouter.get("/appointments/:id", authentication ,getAppointmentOneUser);

appointmentRouter.get("/doctorAppointments", authentication ,getAppointmentsForDoctors);
appointmentRouter.get("/appointmentsDone", authentication,getDoneAppointments);
appointmentRouter.get("/appointment/:appointmentId", authentication, getOneAppointment);


module.exports = appointmentRouter;
