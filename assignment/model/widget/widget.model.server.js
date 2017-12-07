var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');
var WidgetModel = mongoose.model('WidgetModel',widgetSchema);

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidgets = reorderWidgets,

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
function reorderWidgets(pageId, startIndex, endIndex) {
  return Widget.find({_page:pageId}, function (err,widgets) {
    widgets.forEach (function (widget) {
      if(startIndex < endIndex){
        if(widget.position === startIndex){
          widget.position = endIndex;
          widget.save();
        }else if (widget.position > startIndex
          && widget.position <= endIndex){
          widget.position --;
          widget.save();
        }else {
          if(widget.position === startIndex){
            widget.position = endIndex;
            widget.save();
          } else if(widget.position < startIndex
            && widget.position >= endIndex){
            widget.position ++;
            widget.save();
          }
        }
      }
    })
  })
}
