const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const pollsRouter= require("./routes/polls")
require("dotenv").config()

const dbConnection = require("./db");
const pollsRouter = require("./routes/polls");

dbConnection
  .authentificate()
  .then(() => console.log("DB connected"))
  .catch(console.error);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(moorgan("dev"));
app.use(cors());

app.use("/api/polls", pollsRouter)


async function startApp() {
  await dbConnection.sync();
  app.listen(PORT, () => console.log(`Server runnimg on port ${PORT}`));
}

startApp();
