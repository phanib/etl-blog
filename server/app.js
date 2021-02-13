const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const app = express();
const UserModel = require("./models");

const storyRouter = require("./routes/story");
const spaceRouter = require("./routes/space");

app.use(bodyParser.urlencoded({ extended: false }));

const uri = "mongodb://localhost:27017/blog";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

require("./config/auth");

const routes = require("./routes");
const protectedRoutes = require("./routes/protected");

connection.once("open", function () {
  console.log("Connection success to mongodb server");
});

app.use("/", routes);
app.use("/space/:name/story", storyRouter);
app.use("/space", spaceRouter);

app.use(
  "/user",
  passport.authenticate("jwt", { session: false }),
  protectedRoutes
);
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(1447, () => {
  console.log("Server started at 1447 port");
});
