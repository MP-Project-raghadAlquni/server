const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/index.js");

const app = express();
app.use(express.json());
app.use(cors());

const roleRouter = require("./Routers/routes/role");
app.use(roleRouter);

const userRouter = require("./Routers/routes/user");
app.use(userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server run on ${PORT}`);
});
