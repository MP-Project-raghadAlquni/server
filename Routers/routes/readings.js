const express = require("express");
const { addReadings, allReadingsFalse, allReadingsTrue, editReadings, allReadingsFalseDoctor, allReadingTrueDoctor} = require("./../controller/readings");
const readingsRouter = express.Router();

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

// for User
readingsRouter.post("/addNewReadings", authentication, addReadings);
readingsRouter.get("/falseReadings", authentication, allReadingsFalse);
readingsRouter.get("/trueReadings", authentication, allReadingsTrue);
readingsRouter.put("/editReadings", authentication, editReadings);

// for Doctor
readingsRouter.get("/falseReadings/:user", authentication, allReadingsFalseDoctor);
readingsRouter.get("/trueReadings/:user", authentication, allReadingTrueDoctor);

module.exports = readingsRouter;
