const statusModel = require("./../../db/models/statusSchema");

const addstatus = (req, res) => {
  const { status } = req.body;
  const newStatus = new statusModel({
    status,
  });
  newStatus
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getStatus = (req, res) => {
  statusModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  addstatus,
  getStatus,
};
