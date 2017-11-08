module.exports = function(app){
  var userModel = require("../model/user/user.model.server");
  app.get("/api/user/:userId",findUserById);
  app.get("/api/user",findUsers);
  app.post("/api/user",createUser);
  app.put("/api/user/:uid",updateUser);
  app.delete("/api/user/:uid",deleteUser);

  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];
  function deleteUser(reg, res) {
    var uid = reg.params['uid'];
    userModel
      .deleteUser(uid)
      .then(function(stas){
        res.send(stats);
      })
    // for (var i = 0; i < users.length; i++) {
    //   if (users[i]._id === uid) {
    //     users.splice(i, 1);
    //     res.json(users);
    //     return;
    //   }
    // }

  }

  function updateUser(reg, res){
    var uid = reg.params['uid'];
    var updateUser = reg.body;
   userModel
     .updateUser(uid, updateUser)
     .then(function(status){
      res.send(status);
     });

  }
  function getUserById(uid) {
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === uid) {
        return users[i];
      }
    }
  }

  function createUser(reg,res){
    var newUser = reg.body;
    userModel.createUser(newUser)
      .then(function(user){
        res.json(user);
      })
  }

  function findUserById(reg, res){
    var userId = reg.params["userId"];
    // var user = users.find(function (user){
    //   return user._id=== userId;
    // });

    userModel.findUserById(userId)
      .then(function(user){
        res.json(user);
      });
  }

  function findUsers(reg, res){
    var username = reg.query["username"];
    var password = reg.query["password"];
    if(username && password){
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function(user){
        res.json(user);
       console.log(result);

      });
      return;
      // var user = users.find(function(user){
      //   return user.username === username && user.password == password;
      // });
      // if(user){
      //   res.json(user);
      // }else{
      //   res.json({});
      // }
      // return;
    } else if(username){
      userModel.findUserByUsername(username)
        .then(function(user){
          res.json(user);

        })
      return;
    }
    //   var user = users.find(function(user){
    //     return user.username === username;
    //   });
    //   if(user){
    //     res.json(user);
    //   }else{
    //     res.json({});
    //   }
    //   return;
    // }
    res.json(users);
  }



}
