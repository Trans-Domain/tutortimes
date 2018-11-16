import express from "express";
const app = express();
import bodyParser from "body-parser";
import routes from "./routes";
import path from "path";
const PORT = process.env.PORT || 3001;
import mongoose from "mongoose";
import AWS from "aws-sdk";

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
app.use("/", routes);

// listen on PORT
app.listen(PORT, () => console.log(`🌎 ==> Server now on port ${PORT}!`));
