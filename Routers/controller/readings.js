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

module.exports = {
            addReadings,
          };