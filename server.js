// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//var db = require("./models/index");
var SummaryModel = require("./models/game");


// CONFIG //
// set ejs as view engine
app.set("view engine", "ejs");
// serve js & css files
app.use(express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_heroku_app");

//ROUTES//

app.get('/', function(req, res) {
	res.render("index");
});

app.get('/private-feed', function(req, res) {
	res.render("private-feed");
});

app.get('/rules', function(req, res) {
	res.render("rules");
});

app.get('/login', function(req, res) {
	res.render("login");
});

app.get('/sign-up', function(req, res) {
	res.render("sign-up");
});



app.get('/public-feed', function(req, res) {
	SummaryModel.find({},function(err, allSummaries) {
		console.log(allSummaries);
		res.render('public-feed', {allSummaries: allSummaries});
	});
	
});

app.post('/public-feed', function(req, res) {
	console.log(req.body);
	SummaryModel.create({summary: req.body.summary}, function(err, NewSummary) {
		console.log(NewSummary);	
		//res.redirect('/public-feed');
		res.send(NewSummary);
	});

});

app.listen(3000, function() {
	console.log("Ready to Rock");
});

