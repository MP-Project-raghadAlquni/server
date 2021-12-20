const express = require("express");
const { addRole } = require("./../controller/role");
const roleRouter = express.Router();

roleRouter.post("/addRole", addRole);

module.exports = roleRouter;
