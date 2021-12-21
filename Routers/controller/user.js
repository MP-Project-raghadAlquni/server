const userModel = require("../../db/models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET_KEY;

// register for ""doctor"" only
const signUp = async (req, res) => {
  const { fileNumber, password, fullName, verificationNum } = req.body;
  const salt = Number(process.env.SALT);

  const savedFullName = fullName.toLowerCase();

  const found = await userModel.findOne({ fileNumber: fileNumber });

  if (!found) {
    const savedPassword = await bcrypt.hash(password, salt);

    if (verificationNum === "15120") {
      const newUser = new userModel({
        fileNumber,
        fullName: savedFullName,
        password: savedPassword,
        verificationNum,
        role: "61c087973bd70fbf7ad59b52",
      });
      newUser
        .save()
        .then((result) => {
          res.status(201).json(result);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    } else {
      res.json({
        message: "The verification Number is wrong.",
      });
    }
  } else {
    res.json({
      message: "This file Number was registered.",
    });
  }
};

// LOGIN (FOR PATIENT AND DOCTOR)
const login = (req, res) => {
  const { fileNumber, password } = req.body;

  userModel
    .findOne({ fileNumber })
    .populate("role")
    .then(async (result) => {
      if (result) {
        if (result.fileNumber == fileNumber) {
          const hashedPass = await bcrypt.compare(password, result.password);
          const payload = {
            id: result._id,
            fileNumber: result.fileNumber,
            fullName: result.fullName,
            role: result.role.role,
          };

          console.log(hashedPass);

          if (hashedPass) {
            let token = jwt.sign(payload, secret);
            res.status(200).json({ result, token });
          } else {
            res.status(400).json("file number or password is wrong");
          }
        } else {
          res.status(400).json("file number or password is wrong");
        }
      } else {
        res.status(404).json("The user with this file number does not exist");
      }
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

module.exports = { signUp, login };
