var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var config = require("./config");
var mongoose = require('mongoose');
var routes = require("./routes/routes");

mongoose.connect(config.database);

// read POST parameters of request and parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure routes of the application
app.use('/api', routes);

// keep port number configuration in a config file for different environments
app.listen(8080, function(){
    console.log("Listening at port 8080");
})

// expose app           
exports = module.exports = app;