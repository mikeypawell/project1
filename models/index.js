var mongoose = require("mongoose");

mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/project1");

module.exports.Summary = require('./game');
module.exports.User = require('./user');
