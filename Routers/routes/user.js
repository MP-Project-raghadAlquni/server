const express = require("express");
const { signUp, doctorlogin, getAllDoctor, getAllDoctorBinding, rejectedStatusUpdate, acceptedStatusUpdate } = require("./../controller/user");
const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", doctorlogin);
userRouter.get("/doctors", getAllDoctor);
userRouter.get("/bendingsDoctor", getAllDoctorBinding);
userRouter.put("/rejectedStatus/:id", rejectedStatusUpdate);
userRouter.put("/acceptedStatus/:id", acceptedStatusUpdate);



module.exports = userRouter;
