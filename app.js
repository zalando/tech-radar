const path = require("path");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const dotenv = require("dotenv");
const flash = require("connect-flash");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const MemcachedStore = require("connect-memcached")(session);

const authRouter = require("./routes/auth");
const secured = require("./middleware/secured");

dotenv.load();

// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || "http://localhost:3000/callback",
    state: true
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

// You can use this section to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

const app = express();

if (app.get("env") === "production") {
  app.use(helmet());
}
app.use(logger("dev"));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const sess = {
  secret: "foobarbaz",
  cookie: {
    sameSite: false,
    httpOnly: true,
    maxAge: 1800000 // 30 min
  },
  resave: false,
  saveUninitialized: true
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true;
  // sess.store = new MemcachedStore({
  //   hosts: [process.env.MEMCACHEDCLOUD_SERVERS],
  //   // hosts: [process.env.MEMCACHIER_SERVERS],
  //   secret: "Fear is the mind killer" // Optionally use transparent encryption for memcache session data
  // });
}

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use("/", authRouter);
app.use("/", secured());
app.use("/", express.static(path.join(__dirname, "public")));

// Handle auth failure error messages
app.use(function(req, res, next) {
  if (req && req.query && req.query.error) {
    req.flash("error", req.query.error);
  }
  if (req && req.query && req.query.error_description) {
    req.flash("error_description", req.query.error_description);
  }
  next();
});

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Development error handler
// Will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// Production error handler
// No stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

module.exports = app;
