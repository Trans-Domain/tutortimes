import express from "express";
const app = express();
import bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";
const PORT = process.env.PORT || 3001;
require("dotenv").config();
import mongoose from "mongoose";
import AWS from "aws-sdk";

// CORS access
let whitelist = ["http://tutortimes-front.us-east-1.elasticbeanstalk.com/"];
var corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(cors(corsOptions));

AWS.config.region = process.env.REGION;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mongoose settings
mongoose.Promise = global.Promise;
// connect to Mongo DB
mongoose
  .connect(
    process.env.NODE_ENV === "PROD"
      ? process.env.MONGODB_URI
      : "mongodb://localhost/tutortimes",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log(`db connected!`))
  .catch(err => console.log(err));

// add routes
app.use("/", routes);

// listen on PORT
app.listen(PORT, () => console.log(`🌎 ==> Server now on port ${PORT}!`));
