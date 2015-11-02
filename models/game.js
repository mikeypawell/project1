var mongoose = require("mongoose");
// After creating a new model, require and export it:
// module.exports.Tweet = require("./tweet.js");

var Schema = mongoose.Schema;

var SummarySchema = new Schema({
    summary: String,
    timeStamp : {
      type : Date,
      default: Date.now
    },

});

var Summary = mongoose.model('Summary', SummarySchema);
module.exports = Summary;