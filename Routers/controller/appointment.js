const appointmentModel = require("./../../db/models/appointmentSchema");
const userModel = require("./../../db/models/userSchema")



// add new appointment for patient by doctor
const newAppointment = async (req, res) => {
const { forUser } = req.params;
console.log(req.token);
const { day, date, hours, clinic } = req.body;
  const found = await appointmentModel.findOne({
    day: day,
    date: date,
    clinic: clinic,
  })
  if (!found) {
    const newAppointment = new appointmentModel({
      day,
      date,
      hours,
      clinic,
      forUser: forUser,
      byDoctor: req.token.id,
    });
    newAppointment
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
          console.log(err);
        res.status(400).json(err);
      });
  } else {
    res.json({
      message: "This time is already reserved",
    });
  }
};


// get all Appointment for one patient (done or not)
const getAppointments = async (req, res) => {
appointmentModel
    .find({ forUser: req.token.id })
    .then((result) => {
        if(result) {
            res.status(200).json(result);
          } else {
            res
                .status(404)
                .json({
                  message: `Patient with ID ${forUser} dosn't have any appointments!!`,
                });
          }
    })
    .catch((err) => {
        res.status(400).json(err);
      });
}


// get all Appointment for one patient (isDone = true)
const getDoneAppointments = async (req, res) => {
appointmentModel
    .findOne({ forUser: req.token.id, isDone: true })
    .then((result) => {
        if(result) {
            res.status(200).json(result);
          } else {
            res
                .status(404)
                .json({
                  message: `Patient with ID ${patientId} dosn't have any appointments is Done!! `,
                });
          }
    })
    .catch((err) => {
        res.status(400).json(err);
      });
}


// get all Appointment for one patient (isDone = true)
const getOneAppointment = async (req, res) => {
    const { appointmentId} = req.params;
appointmentModel
    .findOne({ forUser: req.token.id, _id: appointmentId})
    .then((result) => {
        if(result) {
            res.status(200).json(result);
          }
    })
    .catch((err) => {
        res.status(400).json(err);
      });
}

module.exports = { newAppointment, getAppointments, getDoneAppointments, getOneAppointment };