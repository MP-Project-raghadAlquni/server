const express = require("express");
const { addRole, getRoles } = require("./../controller/role");
const roleRouter = express.Router();

roleRouter.post("/addRole", addRole);
roleRouter.get("/roles", getRoles);

module.exports = roleRouter;
