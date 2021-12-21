const express = require("express");
const { signUp, doctorlogin, getAllDoctor, getAllDoctorBinding } = require("./../controller/user");
const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", doctorlogin);
userRouter.get("/doctors", getAllDoctor);
userRouter.get("/bendingsDoctor", getAllDoctorBinding);



module.exports = userRouter;
