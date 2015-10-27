// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = require("./models");

// CONFIG //
// set ejs as view engine
app.set("view engine", "ejs");
// serve js & css files
app.use(express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({extended: true}));

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

app.post("/feed", function (req, res){
  var newDare = req.body;

  // add new food to DB (which, in this case, is an array)
  _____.push(newFood);
  // send a response with newly created object
  res.json(newDare);
});


app.listen(3000, function() {
  console.log("express-heroku-starter is running on port 3000");
});

