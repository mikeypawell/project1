// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//var db = require("./models/index");
var Summary = require("./models/game");
var User = require("./models/user");
var session = require('express-session');


// CONFIG //
// set ejs as view engine
app.set("view engine", "ejs");
// serve js & css files
app.use(express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_heroku_app");

// Middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 30 * 60 * 1000 }
}));


//ROUTES//

//Render Play The Game Page 
app.get('/', function(req, res) {
	res.render("index");
});


//Render Rules Page
app.get('/rules', function(req, res) {
	res.render("rules");
});

//Render Login Page
app.get('/login', function(req, res) {
	res.render("login");
});

//Render Sign-Up Page
app.get('/sign-up', function(req, res) {
	res.render("sign-up");
});

app.get('/not-logged-in', function(req, res) {
	res.render("not-logged-in");
});


///GET A SINGLE USER BASED ON THEIR EMAIL
app.get('users/:user_id', function (req, res) {
	User.findById(req.params.user_id, function(err, User) {
            if (err)
                res.send(err);
            res.json(User);
});	
});

//DELETE A SINGLE USER BASED ON THEIR user_id 
app.delete('users/:user_id', function (req, res) {
        User.remove({
            _id: req.params.user_id
        }, function(err, User) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
});	

//
app.get('/public-feed', function(req, res) {
	Summary.find({},function(err, allSummaries) {
		//console.log(allSummaries);
		res.render('public-feed', {allSummaries: allSummaries});
	});
	
});

//POST TO SUMMARIES 
app.post('/public-feed', function(req, res) {
	console.log(req.body);
	console.log(req.session.userId);
	Summary.create({summary: req.body.summary}, function(err, NewSummary) {
		console.log(NewSummary);	
		//res.redirect('/public-feed');
		if (req.session.userId !== null) {
			User.findOne({_id: req.session.userId}, function (err, currentUser) {
			currentUser.games.push(NewSummary);
			currentUser.save();
				console.log("currentUser", currentUser);


			});
		}
		res.send(NewSummary);
	});
});

//THIS IS POPULATING ALL GAMES.  I NEED SPECIFIC USER GAMES.

app.get('/private-feed', function(req, res) {
	User.findOne({_id: req.session.userId})
		.populate('games')
		.exec(function(err, currentUser) {
		console.log("these are the games", currentUser);
		res.render('private-feed', {currentUser: currentUser});
	});

	if (req.session.userId === null ||req.session.user === null) {
		res.redirect('/logout');
	}

});


// A create user route - creates a new user with a secure password
app.post('/users', function (req, res) {
  //console.log(req.body);
  User.createSecure(req.body.email, req.body.password, function (err, newUser) {
    req.session.userId = newUser._id;
    //console.log(newUser);
    res.redirect('/profile');
  });
});


app.post('/sessions', function (req, res) {
  // call authenticate function to check if password user entered is correct
  User.authenticate(req.body.email, req.body.password, function (err, loggedInUser) {
    if (err){
      console.log('authentication error: ', err);
      res.status(500).send();
    } else {
      console.log('setting session user id ', loggedInUser._id);
      req.session.userId = loggedInUser._id;
      res.redirect('/profile');
    }
  });
});

app.get('/profile', function (req, res) { 
	 console.log('session user id: ', req.session.userId);
  // find the user currently logged in
  User.findOne({_id: req.session.userId}, function (err, currentUser) {
    if (err){
      console.log('database error: ', err);
      res.redirect('/logout');

    } else if (req.session.userId === null) {
    	res.redirect('/logout');
    } else {
      // render profile template with user's data
      console.log('loading profile of logged in user');
      res.render('profile', {user: currentUser});
    }
  });
});

app.get('/logout', function (req, res) {
  // remove the session user id
  req.session.userId = null;
  res.redirect('not-logged-in');
});


app.listen(process.env.PORT || 3000, function() {
	console.log("Ready to Rock");
});

