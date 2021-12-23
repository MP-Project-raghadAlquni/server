const dossesModel = require("./../../db/models/dossesSchema");

// add dosses for User by Doctor
const newDosses = async (req, res) => {
  const { forUser } = req.params;
  console.log(req.token);
  const { insulineType1, insulineType2 } = req.body;
  const found = await dossesModel.findOne({
    insulineType1: insulineType1,
    insulineType2: insulineType2,
    forUser: forUser,
  });
  if (!found) {
    const newDosses = new dossesModel({
      insulineType1,
      insulineType2,
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
    insulineType2
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
    
// get dosses for fpr patient


module.exports = {
    newDosses,
    editDosses,
}