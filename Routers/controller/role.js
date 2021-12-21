const roleModel = require("./../../db/models/roleSchema");

const addRole = (req, res) => {
  const { role, permissions } = req.body;
  const newRolw = new roleModel({
    role,
    permissions,
  });
  newRolw
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getRoles = (req, res) => {
  roleModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  addRole,
  getRoles,
};
