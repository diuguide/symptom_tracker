// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// Requiring passport as we've configured it
const passport = require("./config/passport");

// include moment for date for handlebars date format
const moment = require("moment");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();

const hbs = exphbs.create({
  // Specify helpers which are only registered on this instance
  helpers: {
    // convert date portion of timestamp to string "Thu Aug 20 2020"
    prettyDate: (dateIn) => {
      return moment(dateIn).format("MM/DD/YY");
    },
  },
});

// use handlebars as viewer
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
// ! alter will update tables to match the models
// ! drop: false will prevent drop statements while altering a table
db.sequelize.sync({ alter: { drop: false } }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎 Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
