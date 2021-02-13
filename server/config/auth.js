const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const UserModel = require("../models/user");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
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

/**
 * Configure middleware to valid the login of the user
 */
passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });

        if (!user) {
          return done(null, false, { message: "User not valid" });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: "Password is wrong" });
        }

        return done(null, user, { message: "Successfully logged" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

/**
 *
 */
passport.use(
  // TODO: Move the token to runtime environment
  new JWTstrategy(
    {
      secretOrKey: "O0CkEjyolV29kN1Ljb7E2R4rnD",
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
