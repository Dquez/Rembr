'use strict'

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require("body-parser");
require("dotenv").config();
// Configure body parser for AJAX requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// const authCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     secret: "dgjUPFpS-KWU9WsaQ-yK0CjEgrA4KxsvGa42a-qPP1WsqUe74VXuy66aWLLf4Sad",
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 15,
//         // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
//     jwksUri: "https://rembr-app.auth0.com/.well-known/jwks.json"
//     }),
//     // This is the identifier we set when we created the API
//     // ,
//     audience: 'https://rembr-app.auth0.com/api/v2/',
//     issuer: 'https://rembr-app.auth0.com',
//     algorithms: ['RS256']
// });

// module.exports = authCheck;

const articlesController = require("./controllers/articlesController");
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(articlesController);



// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/rembr",
  {
    useMongoClient: true
  }
);



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

