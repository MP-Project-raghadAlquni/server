const express = require("express");
const { newDosses, editDosses, getAllDossesForUser, getAllDossesForDoctor} = require("./../controller/dosses");
const dossesRouter = express.Router();

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

dossesRouter.post("/addDosses/:forUser", authentication ,newDosses);
dossesRouter.put("/editDosses/:forUser", authentication ,editDosses);
dossesRouter.get("/patientDosses", authentication , getAllDossesForUser);
dossesRouter.get("/patientDossesDoctor/:forUser", authentication , getAllDossesForDoctor);

module.exports = dossesRouter;
