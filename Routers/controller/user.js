const userModel = require("../../db/models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET_KEY;

// register for ""doctor"" only
const signUp = async (req, res) => {
  const { password, fullName, email, fileNumber } = req.body;
  const salt = Number(process.env.SALT);
  const savedFullName = fullName.toLowerCase();

  const found = await userModel.findOne({ email: email });

  if (!found) {
    const savedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      fileNumber,
      email,
      fullName: savedFullName,
      password: savedPassword,
      role: "61c087973bd70fbf7ad59b52",
      status: "61c1b7640e3910e1130d4b07",
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
      message: "This email was registered.",
    });
  }
};

// LOGIN (for doctor only)
const doctorlogin = (req, res) => {
  const { password, email } = req.body;

  userModel
    .findOne({ email })
    .populate("role status")
    .then(async (result) => {
      if (result) {
        console.log(result);
        if (result.email == email && result.status.status == "pending") {
          res.status(400).json("Status of your request: pending");
        } else if (
          result.email == email &&
          result.status.status == "rejected"
        ) {
          res
            .status(400)
            .json(
              "The required information is incomplete, you must complete it"
            );
        } else if (
          result.email == email &&
          result.status.status == "accepted"
        ) {
          const hashedPass = await bcrypt.compare(password, result.password);
          const payload = {
            id: result._id,
            email: result.email,
            fullName: result.fullName,
            role: result.role.role,
            status: result.status.status,
          };

          console.log(hashedPass, "here");

          if (hashedPass) {
            let token = jwt.sign(payload, secret);
            res.status(200).json({ result, token });
          } else {
            res.status(400).json("email or password is wrong");
          }
        } else {
          res.status(400).json("email or password is wrong");
        }
      } else {
        res.status(404).json("email does not exist");
      }
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

const getAllDoctor = (req, res) => {
    userModel
    .find({ role: process.env.DOCTOR_ROLE })
    .then((result) => {
        if (result) {
            console.log(result);
            res.status(200).json(result);
    } 
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}


module.exports = { signUp, doctorlogin, getAllDoctor };
