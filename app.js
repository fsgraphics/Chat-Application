/* eslint-disable no-undef */
// external imports
const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const moment = require("moment");

// internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

const app = express();
const ioServer = http.createServer(app);
dotenv.config();

// socket creation
const {Server} = require("socket.io");
const io = new Server(ioServer)
global.io = io;

// set comment as app locals
app.locals.moment = moment;



// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 not found handler
app.use(notFoundHandler);
// common error handler
app.use(errorHandler);

// Create Server
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
