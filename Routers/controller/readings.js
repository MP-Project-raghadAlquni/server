const readingsModel = require("./../../db/models/readingsSchema");

// add new Readings by user
const addReadings = async (req, res) => {
        const { beforeBreakfast, afterBreakfast, beforeLunch, afterLunch, beforeDinner, afterDinner, beforeSleep, date } = req.body;
          const found = await readingsModel.findOne({
            date: date && beforeBreakfast, afterBreakfast, beforeLunch, afterLunch, beforeDinner, afterDinner, beforeSleep })
          
            if (!found) {
            const newReadings = new readingsModel({
            beforeBreakfast,
            afterBreakfast,
            beforeLunch,
            afterLunch,
            beforeDinner,
            afterDinner,
            beforeSleep,
            byUser: req.token.id,
            date,
            });
            newReadings
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
              message: "This field is not empty",
            });
          }
        };


// get all readings isRead = false
const allReadingsFalse = async (req, res) => {
    readingsModel
    .find({ isRead: false, isDel: false, byUser: req.token.id })
    .then((result) => {
      if (result.length > 0) {
        console.log(result);
        res.status(200).json(result);
      } else {
        res.status(400).json("all readings is read!!");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

// get all readings isRead = true
const allReadingsTrue= async (req, res) => {
    readingsModel
    .find({ isRead: true, isDel: false, byUser: req.token.id })
    .then((result) => {
      if (result.length > 0) {
        console.log(result);
        res.status(200).json(result);
      } else {
        res.status(400).json("all readings is read!!");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}


module.exports = {
            addReadings,
            allReadingsFalse,
            allReadingsTrue,
          };