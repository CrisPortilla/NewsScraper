var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var exphbs = require('express-handlebars');
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");

mongoose.Promise = Promise;

var app = express();

var PORT = process.env.PORT || 7070;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var routes = require('./controllers/controller');
app.use('/', routes);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use (express.static("public"));

mongoose.connect("mongodb://localhost/newscraperdb");

var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
})

db.once("open", function() {
    console.log("Mongoose connection successful");
});


var connectionString;

if (process.env.PORT) {
    connectionString = 'mongodb://heroku_6117srk8:so0sa15d3m5enc2ncp2okqh76n@ds121091.mlab.com:21091/heroku_6117srk8';
} else {
    connectionString = 'mongodb://localhost/newscraperdb';
}

mongoose.connect(connectionString).then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port: " + PORT);
    });
});