const express = require("express");
const { addReadings } = require("./../controller/readings");
const readingsRouter = express.Router();

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

readingsRouter.post("/addNewReadings", authentication, addReadings);

module.exports = readingsRouter;
