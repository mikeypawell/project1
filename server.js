// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = require("./models/index");

// CONFIG //
// set ejs as view engine
app.set("view engine", "ejs");
// serve js & css files
app.use(express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/project1' // plug in the db name you've been using
);

//ROUTES//

app.get('/', function(req, res) {
  res.render("index");
});

app.get('/odds', function(req, res) {
	var oddsFeed =  [
		{body: "do this"},
		{body: "do that"}
	];

  res.json(oddsFeed);
});

app.listen(process.env.PORT || 3000);
