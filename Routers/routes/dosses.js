const express = require("express");
const { newDosses } = require("./../controller/dosses");
const dossesRouter = express.Router();

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

dossesRouter.post("/addDosses/:forUser", authentication ,newDosses);

module.exports = dossesRouter;
