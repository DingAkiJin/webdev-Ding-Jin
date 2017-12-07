

module.exports = function(app){
  var userModel = require("../model/user/user.model.server");
  app.get("/api/user/:uid",findUserById);
  app.get("/api/user",findUsers);
  app.post("/api/user",createUser);
  app.put("/api/user/:uid",updateUser);
  app.delete("/api/user/:uid",deleteUser);

  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var bcrypt = require("bcrypt-nodejs");
  var FacebookStrategy = require('passport-facebook').Strategy;
  var facebookConfig = {
    clientID     : "1582832375096814",
    clientSecret : "a10b5fdbc54096f3b39046559cf7e288",
    callbackURL  : "https://localhost:3100/login"
  };
  passport.use(
    new FacebookStrategy(facebookConfig, facebookStrategy));

  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  app.post("/api/register",register);
  app.post("/api/login",passport.authenticate('local'), login);
  app.post("/api/logout", logout);
  app.post("/api/loggedIn", loggedIn);
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: 'http://localhost:4200/profile',
      failureRedirect: 'http://localhost:4200/login'
    }));
  app.get ('/facebook/login',
    passport.authenticate('facebook', { scope : 'email' }));
  app.get ('/facebook/oauth2callback',
    passport.authenticate('facebook', {
      successRedirect: 'http://localhost:4200/profile',
      failureRedirect: 'http://localhost:4200/login'
    }));

  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];

  function loggedIn(req, res){
    if(req.isAuthenticated()){
      res.json(req.user);
    }else{
      res.send('0');
    }
  }
  function login(reg, res){
    res.json(reg.user);
  }
  function localStrategy(username, pass, done){
    userModel
      .findUserByUsername(username)
      .then(function(user){
        if(user && bcrypt.compareSync(pass, user.password)){
         return done(null, user);
        }else{
          return done(null,false);
        }
      });
  }
  function facebookStrategy(token, refreshToken, profile, done){
    userModel
      .findUserByFacebookId(profile.id).then(function(user) {
      if(user) { return done(null, user); } // already in db
      else { // if not, insert into db using profile info
        var names = profile.displayName.split(" ");
        var newFacebookUser = { lastName:  names[1],
          firstName: names[0],
          email:     profile.emails ? profile.emails[0].value:"",
          facebook: { id:    profile.id, token: token }
        };
        return userModel.createUser(newFacebookUser);
      }
    }).then(
      function(user){
        return done(null, user);
      }
    );
  }




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

  function register(reg, res){
    var user = reg.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .createUser(user)
      .then(function(user){
        reg.login(user,function(err){
          res.json(user);
        });
      });
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
  function logout(req, res) {
    req.logout();
    res.send(200); //success
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

  function serializeUser(user, done){
    done(null, user);
  }
 function deserializeUser(user, done){
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null,user);
        },
        function(err){
          done(err,null);
        }
      );
 }
  function facebookLogin(token, refreshToken, profile, done) {
    //check if the fb user already exists in our DB

    userModel
      .findUserByFacebookId(profile.id)
      .then(
        function (facebookUser) {
          // we arent validating, but checking if the user exists
          // only in local strategies we do validation here
          if (facebookUser) {
            return done(null, facebookUser);
          } else {
            //if th euser doesnt exist, we create here
            facebookUser = {
              username: profile.displayName.replace(/ /g, ''),
              facebook: {
                token: token,
                id: profile.id,
                displayName: profile.displayName
              }
            }
          }
          userModel
            .createUser(facebookUser)
            .then(
              function (user) {
                done(null, user);
              }
            );
        }
      );
  }

}
