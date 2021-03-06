const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

/**
 * Login signup route implementation
 */
router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res, next) => {
    res.json({
      message: "Signup successful",
      user: req.user,
    });
  }
);

/**
 * Login route implementation
 */
router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("Failed to login");

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, "O0CkEjyolV29kN1Ljb7E2R4rnD");

        return res.json({ token, email: user.email });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;
