const userModel = require("../../db/models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { status } = require("express/lib/response");
const { findOne } = require("../../db/models/userSchema");
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
          result.status.status == "accepted" || result.status.status == "verified"
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
};

const getAllDoctorBinding = (req, res) => {
  userModel
    .find({ role: process.env.DOCTOR_ROLE, status: process.env.PENDING_STATUS })
    .then((result) => {
      if (result.length > 0) {
        console.log(result);
        res.status(200).json(result);
      } else {
        res.status(400).json("there is no pendings users!!");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const rejectedStatusUpdate = (req, res) => {
    const { id } = req.params;

    userModel
    .findOneAndUpdate(
        {
            status: process.env.PENDING_STATUS,
            _id: id,
        },
        {
            status: process.env.REJECTED_STATUS
        
        }, {new: true}
    )
    .then((result) => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json("This user is accepted or deleted");
        }
    })
    .catch((err) => {
        res.status(400).json(err);
      });
}

const acceptedStatusUpdate = (req, res) => {
    const { id } = req.params;

    userModel
    .findOneAndUpdate(
        {
            status: process.env.PENDING_STATUS,
            _id: id,
        },
        {
            status: process.env.ACCEPTED_STATUS,
        
        }, {new: true}
    )
    .then((result) => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json("This user is rejected or deleted");
        }
    })
    .catch((err) => {
        res.status(400).json(err);
      });
}

const addPatient = async (req, res) => {
  const {fileNumber, fullName, diabetesType,age} = req.body
  const savedFullName = fullName.toLowerCase();

  const found = await userModel.findOne({ fileNumber: fileNumber });

  if(!found) {
    const newPatient = new userModel({
      fileNumber,
      fullName: savedFullName,
      age,
      diabetesType,
      role: "61c087a43bd70fbf7ad59b54",
      status: process.env.NOT_VERIFIED_STATUS,
      doctor: req.token.id,
    })

    newPatient
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
} else {
  res.json({
    message: "Patient with this File Number was registered.",
  });
}
};

   
const compeleteRegister = async (req, res) => {
  const { fileNumber, password, email } = req.body;
  const salt = Number(process.env.SALT);
  const savedPassword = await bcrypt.hash(password, salt);

  userModel
  .findOneAndUpdate({ fileNumber: fileNumber, status: process.env.NOT_VERIFIED_STATUS,
  },
  {
    status: process.env.VERIFIED_STATUS,
    password: savedPassword,
    email: email,

  }, {new: true}
  )
  .then((result) => {
    if (result) {
      res.status(200).json(result);
      console.log(result);
    } else {
        res.status(400).json("your account is already verified ,you can Login now");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
})
}

module.exports = { signUp, doctorlogin, getAllDoctor, getAllDoctorBinding, rejectedStatusUpdate, acceptedStatusUpdate, addPatient, compeleteRegister };
