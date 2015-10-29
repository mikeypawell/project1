var mongoose = require("mongoose");

mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL || 
                  "https://what-are-the-odds.herokuapp.com/");
// After creating a new model, require and export it:
// module.exports.Tweet = require("./tweet.js");
