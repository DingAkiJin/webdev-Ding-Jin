module.exports = function(app){
  app.get("/api/user/:userId",findUserById);
  app.get("/api/user",findUsers);
  app.post("/api/user",createNewUser);
  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];

function createNewUser(reg, res){
  var user = res.body;
  user._id = (Math.floor( Math.random() * 999 ) + 100 ).toString();
  users.push(user);
  res.json(user);

  }

  function findUserById(reg, res){
    var userId = reg.params["userId"];
    var user = users.find(function (user){
      return user._id=== userId;
    });
    res.json(user);
  }

  function findUsers(reg, res){
    var username = reg.query["username"];
    var password = reg.query["password"];
    if(username && password){
      var user = users.find(function(user){
        return user.username === username && user.password == password;
      });
      if(user){
        res.json(user);
      }else{
        res.json({});
      }
      return;
    } else if(username){
      var user = users.find(function(user){
        return user.username === username;
      });
      if(user){
        res.json(user);
      }else{
        res.json({});
      }
      return;
    }
    res.json(users);
  }



}
