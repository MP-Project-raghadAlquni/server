const dossesModel = require("./../../db/models/dossesSchema");

// add dosses for User by Doctor
const newDosses = async (req, res) => {
  const { forUser } = req.params;
  console.log(req.token);
  const { insulineType1, insulineType2, insulineType1Dosses, insulineType2Dosses} = req.body;
  const found = await dossesModel.findOne({
    insulineType1: insulineType1,
    insulineType2: insulineType2,
    forUser: forUser,
  });
  if (!found) {
    const newDosses = new dossesModel({
      insulineType1,
      insulineType2,
      insulineType1Dosses,
      insulineType2Dosses,
      forUser: forUser,
      byDoctor: req.token.id,
    });
    newDosses
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
      message: "This user already have Dosses, U can edit it only",
    });
  }
};

// edit patient dosses by Doctor
const editDosses = async (req, res) => {
    const { forUser } = req.params;
  const {
    insulineType1,
    insulineType2,
    insulineType1Dosses,
    insulineType2Dosses,
    note,
  } = req.body;
 
  dossesModel
  .findOneAndUpdate(
    {
      forUser: forUser,
      byDoctor: req.token.id
    },
    {
        insulineType1,
        insulineType2,
        insulineType1Dosses,
        insulineType2Dosses,
        note,
    },
    { new: true })
    .then((result) => {
        if(result) {
            res.status(200).json(result);
      } else {
        res
          .status(404)
          .json({
            message: `There is no patient with this ID: (${forUser}) or you can't edit it!!`,
          });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
    
// get dosses for patient
const getAllDossesForUser = async (req, res) => {
    dossesModel
        .findOne({ forUser: req.token.id })
        .then((result) => {
            if(result) {
                res.status(200).json(result);
              } else {
                res
                    .status(404)
                    .json({
                      message: `There is no patient with this ID: (${req.token.id})`,
                    });
              }
        })
        .catch((err) => {
            res.status(400).json(err);
          });
    }

// get dosses of patient for doctor
const getAllDossesForDoctor = async (req, res) => {
    const { forUser } = req.params;
    dossesModel
        .find({ byDoctor: req.token.id,  forUser: forUser})
        .then((result) => {
            if(result) {
                res.status(200).json(result);
              } else {
                res
                    .status(404)
                    .json({
                      message: `There is no patient with this ID: (${req.token.id})`,
                    });
              }
        })
        .catch((err) => {
            res.status(400).json(err);
          });
    }


module.exports = {
    newDosses,
    editDosses,
    getAllDossesForUser,
    getAllDossesForDoctor,
}