const express = require("express");
const { addstatus, getStatus } = require("./../controller/status");
const statusRouter = express.Router();

statusRouter.post("/status", addstatus);
statusRouter.get("/getStatus", getStatus);

module.exports = statusRouter;
