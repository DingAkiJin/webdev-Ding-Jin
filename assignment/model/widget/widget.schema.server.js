var mongoose = require('mongoose');
var widgetSchema = mongoose.Schema({
  widgetType: {type: String, enum: ['HEADING', 'IMAGE','YOUTUBE','HTML','TEXT']},
  pageId: {type: mongoose.Schema.Types.ObjectId, ref:"PageModel"},
  size: Number,
  text: String,
  width: String,
   url : String,
  type: String,
  name: String,
  placeholder: String,
  description: String,
  height: String,
  rows: Number,
  class: String,
  icon: String,

  deletable: Boolean,
  formatted: Boolean
},{collection: 'widget'});
module.exports = widgetSchema;
