var mongoose = require('mongoose');
var pageSchema = mongoose.Schema({
  name: String,
  websiteId: String,
  widgets:[{type: mongoose.Schema.Types.ObjectId, ref:"WidgetModel"}],
  description: String
},{collection: 'page'});
module.exports = pageSchema;
