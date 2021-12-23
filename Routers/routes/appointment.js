const express = require("express");
const { newAppointment, getAppointments } = require("./../controller/appointment");
const appointmentRouter = express.Router();

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

appointmentRouter.post("/appointment/:forUser", authentication, newAppointment);
appointmentRouter.get("/appointments/:userId", authentication, getAppointments);

module.exports = appointmentRouter;
