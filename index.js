const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/Routes_user.js")(app);
require('./app/routes/Routes_professions')(app)
require('./app/routes/Routes_company')(app)
require("./app/routes/Routes_review")(app)
require("./app/routes/Routes_comment")(app)

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
