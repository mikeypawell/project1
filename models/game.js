var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_heroku_app");

// After creating a new model, require and export it:
// module.exports.Tweet = require("./tweet.js");

var Schema = mongoose.Schema;

var SummarySchema = new Schema({
    summary: String,
});

var Summary = mongoose.model('Summary', SummarySchema);
module.exports = Summary;