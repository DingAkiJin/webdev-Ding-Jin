var mongoose = require("mongoose");

var db = mongoose.connect('mongodb://jin:jin@ds157475.mlab.com:57475/webdev-cs5610',{
  useMongoClient:true
});
module.exports = db;

