const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const app = express();
const UserModel = require("./models/user");
const storyRouter = require("./routes/story");
const spaceRouter = require("./routes/space");
const uri = "mongodb://localhost:27017/blog";
const connection = mongoose.connection;
const routes = require("./routes");
require("./config/auth");
const protectedRoutes = require("./routes/protected");

/** Body Parser middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongo Connection Callback
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
connection.once("open", function () {
  console.log("Connection success to mongodb server");
});

app.use("/", routes);
app.use("/story", storyRouter);
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

// Start the server
app.listen(1447, () => {
  console.log("Server started at 1447 port");
});
