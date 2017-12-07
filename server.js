/**
 * Created by sesha on 6/2/17.
 */

// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session      = require('express-session');

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(cookieParser());
// session make sure the cookie is encrypted
// app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(session({ secret: "asdfasdf"}));

// set up passport after cookie and session
app.use(passport.initialize());
app.use(passport.session());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





// Point static path to dist -- For building -- REMOVE
//   app.use(express.static(path.join(__dirname, 'dist')));
//






const port = process.env.PORT || '3100';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);

var mongoose = require('mongoose');
var serverside = require("./assignment/app.js");
serverside(app);



var serverSideMongo = require("./server/test-mongodb/app");
serverSideMongo(app);

// app.use('*', function (req, res) {
//   res.sendFile(path.join(__dirname, './dist/index.html'));
// });


// For Build: Catch all other routes and return the index file -- BUILDING



server.listen( port , () => console.log('Running'));
