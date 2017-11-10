// var mongoose = require("mongoose");
// var db = mongoose.connect('mongodb://localhost/cs5610',{
//   useMongoClient:true
// });
// module.exports = db;
module.exports  = function () {




  var models = {
    UserModel: require("./user/user.model.server")(),
    WebsiteModel: require("./website/website.model.server")(),
    PageModel: require("./page/page.model.server")(),
    WidgetModel: require("./widget/widget.model.server")()
    //TODO : add all other models
  };
  return models;
};
