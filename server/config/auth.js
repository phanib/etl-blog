const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const UserModel = require("../models");

/**
 * Passport middleware config for signup.
 * email and password are required fields
 * Reference - http://www.passportjs.org/packages/passport-local/
 */
passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.create({ email, password });

        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
