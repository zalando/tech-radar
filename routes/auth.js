var express = require("express");
var router = express.Router();
var passport = require("passport");

// Perform the login, after login Auth0 will redirect to callback
router.get(
  "/login",
  passport.authenticate("auth0", {
    scope: "openid email profile"
  }),
  function(req, res) {
    res.redirect("/");
  }
);

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
// router.get(
//   "/callback",
//   passport.authenticate("auth0", {
//     failureRedirect: "/login"
//   }),
//   function(req, res, next) {
//     console.log({ req });
//     if (!req.user) {
//       return res.redirect("/login");
//     }
//     const returnTo = req.session.returnTo;
//     delete req.session.returnTo;
//     res.redirect(returnTo || "/");
//   }
// );
router.get("/callback", function(req, res, next) {
  console.log(req.session);
  passport.authenticate("auth0", function(err, user, info) {
    console.log({ err, user, info });
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login");
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;
      res.redirect(returnTo || "/");
    });
  })(req, res, next);
});

// Perform session logout and redirect to homepage
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
