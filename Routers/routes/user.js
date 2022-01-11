const express = require("express");
const { signUp, login, getAllDoctor, getAllDoctorBinding, getDoctorByIdAdmin,rejectedStatusUpdate, acceptedStatusUpdate, addPatient, compeleteRegister, getPatientById, editPatientProfile, getAllVerfiedPatients, getAllPatientDoctor, editDoctorProfile, spamUserFromAdmin, getAllUserForAdmin, getAllDoctorAcceotedToAdmin, getAllPatientsverifiedToAdmin, getAllDoctorBindingAdmin, getPendingDoctorById, getPatientByIdAdmin, getUserById} = require("./../controller/user");
const userRouter = express.Router();

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

userRouter.post("/signup", signUp);
userRouter.post("/login", login);

userRouter.get("/acceptedDoctors", getAllDoctor);
userRouter.get("/bendingsDoctor", getAllDoctorBinding);
userRouter.get("/patientsForDoctor", authentication, getAllPatientDoctor);
userRouter.put("/doctorProfile/:doctorId", authentication,editDoctorProfile);



userRouter.post("/patientRegister", authentication, addPatient);
userRouter.put("/compeleteRegister", compeleteRegister);
userRouter.get("/patient/:id", authentication ,getPatientById)
userRouter.put("/patientProfile", authentication , editPatientProfile);
userRouter.get("/verfiedPatients", authentication, getAllVerfiedPatients);

// for Admin
userRouter.put("/spamUser/:userId", authentication, authorization, spamUserFromAdmin);
userRouter.get("/allUsers", authentication, authorization, getAllUserForAdmin);
userRouter.get("/getAllDoctorAcceotedToAdmin", authentication, authorization, getAllDoctorAcceotedToAdmin);
userRouter.get("/getAllPatientsverifiedToAdmin", authentication, authorization, getAllPatientsverifiedToAdmin);
userRouter.get("/getAllDoctorBindingAdmin", authentication, authorization, getAllDoctorBindingAdmin);
userRouter.get("/getPendingDoctorById/:id", authentication, authorization, getPendingDoctorById);
userRouter.get("/onePatient/:id",  authentication, authorization, getPatientByIdAdmin);
userRouter.get("/oneDoctor/:id",  authentication, authorization, getDoctorByIdAdmin);

userRouter.put("/rejectedStatus/:id", authentication, authorization, rejectedStatusUpdate);
userRouter.put("/acceptedStatus/:id",  authentication, authorization, acceptedStatusUpdate);
userRouter.get("/acceptedStatus/:id",  authentication, authorization, acceptedStatusUpdate);


userRouter.get("/users/:id", authentication ,getUserById)




module.exports = userRouter;
