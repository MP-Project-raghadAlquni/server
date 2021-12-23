const appointmentModel = require("./../../db/models/appointmentSchema");


// add new appointment for patient by doctor
const newAppointment = async (req, res) => {
const { forUser } = req.params;
console.log(req.token);
const { day, date, hours, clinic } = req.body;
  const found = await appointmentModel.findOne({
    day: day,
    date: date,
    clinic: clinic,
    forUser: process.env.NOT_VERIFIED_STATUS,
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
      message: "This This time is already reserved",
    });
  }
};


// get all Appointment for one patient (done or not)
const getAppointments = async (req, res) => {
    const { patientId } = req.params;
appointmentModel
    .findOne({ _id: patientId })
    .populate("forUser")
    .then((result) => {
        if(result) {
            res.status(200).json(result);
          } else {
            res
                .status(404)
                .json({
                  message: `Patient with ID ${patientId} dosn't have any appointments!!`,
                });
          }
    })
    
}


module.exports = { newAppointment, getAppointments };
