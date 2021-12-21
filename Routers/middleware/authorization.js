const roleModel = require("../../db/models/roleSchema");

const authorization = async (req, res, next) => {
  console.log(req.token, "token");
  try {
    if (req.token.role.split(" ")[0] === "admin") {
      next();
    } else {
      res.status(403).json("forbidden");
    }
  } catch (error) {
    console.log(error);
    res.status(403).json(error);
  }
};

module.exports = authorization;
