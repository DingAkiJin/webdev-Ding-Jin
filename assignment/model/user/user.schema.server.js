var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email:String,
  facebook: {
    id: String,
    token: String
  }
  },{collection:'user'});

module.exports = UserSchema;
