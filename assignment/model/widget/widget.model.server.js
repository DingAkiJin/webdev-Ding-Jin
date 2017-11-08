var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');
var WidgetModel = mongoose.model('WidgetModel',widgetSchema);

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;

module.exports = WidgetModel;

function deleteWidget(wgid) {
  return WidgetModel.remove({_id: wgid});
}

function updateWidget(wgid, widget){
  return WidgetModel.update({_id:wgid},widget);
}
function findWidgetById(wgid){
  return WidgetModel.findById(wgid);
}

function findAllWidgetsForPage(pageId){
  return WidgetModel.find({pageId: pageId});
}
function createWidget(widget){
  return WidgetModel.create(widget);
}
