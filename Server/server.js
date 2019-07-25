//import nodemodule
var express = require("express");
var app = require('express').Router();
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const mongoose = require("mongoose");
var AdminRoutes = require('./routes/Admin');
var OrderRoute = require('./routes/Order');
var dbConnection = require ('./config/dbConnection');
var multer = require('multer');

//app create
var app = express();

//add middleware
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  Show image client side
app.use(express.static('pics'));

//db connection
dbConnection();


///user routes
// app.use('/',userRoute);
app.use('/Admin',AdminRoutes);
app.use('/Order',OrderRoute);
app.listen(process.env.PORT || 8080, function() {
  console.log("express server running");
});