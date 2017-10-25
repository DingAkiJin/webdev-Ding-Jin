module.exports = function(app) {
  var WEBSITES = [
    {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
    {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
    {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
    {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
    {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
    {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
    {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
  ];

  app.get('/api/website', findAllWebsites);
  app.get("/api/user/:uid/website", findWebsitesByUser);
  app.post("/api/user/:uid/website", createWebsite);
  app.delete("/api/user/:uid/website/:websiteId", deleteWebsite);
  app.get("/api/user/:uid/website/:websiteId", findWebsiteById);
  app.put("/api/user/:uid/website/:websiteId", updateWebsite);

  function updateWebsite(reg, res){
    var websiteId = reg.params['websiteId'];
    var uid = reg.params['uid'];
    var newWebsite = reg.body;
    for (var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        WEBSITES[i] = newWebsite;
        res.json(getWebsiteById(websiteId));
        return;
      }
    }
  }
  function findWebsiteById(reg,res){
    var websiteId = reg.params['websiteId'];
    var uid = reg.params['uid'];
    res.json(getWebsiteById(websiteId));

  }

  function getWebsiteById(websiteId) {
    for (var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        return WEBSITES[i];
      }
    }
  }

    function deleteWebsite(reg, res) {
      var websiteId = reg.params['websiteId'];
      var uid = reg.params['uid'];
      for (var i = 0; i < WEBSITES.length; i++) {
        if (WEBSITES[i]._id === websiteId) {
          WEBSITES.splice(i, 1);
          var websites = getWebsitesForUserId(uid);
          res.json(websites);
          return;
        }
      }

    }

    function findAllWebsites(req, res) {
      res.json(WEBSITES);
    }
  //
    function findWebsitesByUser(req, res) {
      var userId = req.params['uid'];
      var websites = getWebsitesForUserId(userId);
      res.json(websites);
    }
  //
    function getWebsitesForUserId(userId) {
      var websites = [];

      for (var i = 0; i < WEBSITES.length; i++) {
        if (WEBSITES[i].developerId === userId) {
          websites.push(WEBSITES[i]);
        }
      }
      return websites;
    }

    function createWebsite(reg, res) {
      var uid = reg.params['uid'];
      var website = reg.body;
      website.developerId = uid;
      website._id = (Math.floor(Math.random() * 999) + 100 ).toString();
      WEBSITES.push(website);
      var websites = getWebsitesForUserId(uid);
      res.json(websites);
    }

  }

