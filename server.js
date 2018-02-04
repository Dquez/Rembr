const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const articlesController = require("./controllers/articlesController");
const authController = require("./controllers/authController");
const app = express();
const PORT = process.env.PORT || 3001;


const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');

app.use(cors());
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://rembr-app.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'https://rembr-app.auth0.com/api/v2/',
    issuer: 'rembr-app.auth0.com',
    algorithms: ['RS256']
});


// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(articlesController);
// route for authenticating user's cookie
app.use(authController);

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

module.exports = {authCheck}