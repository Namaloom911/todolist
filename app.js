const express = require("express");
const { connect } = require("mongoose");
const app = express();
const DB = require("./db/connect");
const port = 3000 || process.env;
const routes = require("./routes/tasks");
const notFound = require("./notfound");
const errorHandlerMiddleware = require("./errorHandlerMiddleware");
app.use(errorHandlerMiddleware);
app.use(express.json());
require("dotenv").config();
const start = async () => {
  try {
    await DB(process.env.mongo_URI);
    app.listen(port, console.log("Listenig to port 3000..."));
  } catch (error) {
    console.log(error);
  }
};
start();
app.use("/api/v1/tasks", routes);
