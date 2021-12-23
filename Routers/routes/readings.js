const express = require("express");
const { addReadings, allReadingsFalse, allReadingsTrue } = require("./../controller/readings");
const readingsRouter = express.Router();

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

readingsRouter.post("/addNewReadings", authentication, addReadings);
readingsRouter.get("/falseReadings", authentication, allReadingsFalse);
readingsRouter.get("/trueReadings", authentication, allReadingsTrue);

module.exports = readingsRouter;
