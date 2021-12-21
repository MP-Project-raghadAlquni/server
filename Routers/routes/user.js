const express = require("express");
const { signUp, doctorlogin, getAllDoctor } = require("./../controller/user");
const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", doctorlogin);
userRouter.get("/doctors", getAllDoctor);


module.exports = userRouter;
