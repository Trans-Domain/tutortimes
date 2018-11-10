const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const AWS = require("aws-sdk");

AWS.config.region = process.env.REGION;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mongoose settings
mongoose.Promise = global.Promise;
// connect to Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/tutortimes",
  {
    useNewUrlParser: true
  }
);

// add routes
// app.use("/", routes);

// listen on PORT
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
