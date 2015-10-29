var mongoose = require("mongoose");

mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/my_heroku_app");

module.exports.Summary = require('./game');
module.exports.User = require('./user');
