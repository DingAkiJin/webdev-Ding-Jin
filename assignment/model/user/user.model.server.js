var mongoose = require('mongoose');
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);
UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByFacebookId = findUserByFacebookId;

module.exports = UserModel;

function findUserByFacebookId(facebookId){
  return UserModel.findOne({'facebook.id': facebookId});
}

function deleteUser(uid){
  return UserModel.remove({_id:uid});

}
function updateUser(uid,user){
  return UserModel.update({_id: uid}, user);
}
function findUserByUsername(username){
  return UserModel.findOne({username:username});
}
function findUserByCredentials(username, password){
  return UserModel.findOne({username: username, password: password});

}
function createUser(user){
  return UserModel.create(user);
}

function findAllUsers(){
  UserModel.find(function(err, docs){
    console.log(docs);
  });
}

function findUserById(userId){
  return UserModel.findById(userId);
}
