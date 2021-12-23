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


module.exports = {
    newDosses
}