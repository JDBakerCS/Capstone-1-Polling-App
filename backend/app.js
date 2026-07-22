const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const dbConnection = require("./db");
const pollsRouter = require("./routes/polls");

dbConnection
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch(console.error);

const app = express();
const { Poll, Option, Vote } = require("./models/index");
const pollsRouter = require("./routes/polls");
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/polls", pollsRouter);

app.use("/api/polls", pollsRouter);

async function startApp() {
  await dbConnection.sync();
  app.listen(PORT, () => console.log(`Server runnimg on port ${PORT}`));
}

startApp();
