const express = require("express");
const { signUp, doctorlogin, getAllDoctor, getAllDoctorBinding, rejectedStatusUpdate, acceptedStatusUpdate, addPatient, compeleteRegister, getPatientById, editPatientProfile, getAllVerfiedPtients, getAllPatientDoctor} = require("./../controller/user");
const userRouter = express.Router();

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

userRouter.post("/signup", signUp);
userRouter.post("/login", doctorlogin);

userRouter.get("/acceptedDoctors", getAllDoctor);
userRouter.get("/bendingsDoctor", getAllDoctorBinding);
userRouter.put("/rejectedStatus/:id", rejectedStatusUpdate);
userRouter.put("/acceptedStatus/:id", acceptedStatusUpdate);
userRouter.get("/patientsForDoctor/:doctorId", getAllPatientDoctor);



userRouter.post("/patientRegister", authentication, addPatient);
userRouter.put("/compeleteRegister", compeleteRegister);
userRouter.get("/patient/:id", getPatientById)
userRouter.put("/patientProfile", authentication , editPatientProfile);
userRouter.get("/verfiedPtients", getAllVerfiedPtients);










module.exports = userRouter;
