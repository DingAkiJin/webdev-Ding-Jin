module.exports = function(app) {

  var widgets = [
    {'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'
    },
    {'_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/RY4rWrlY-qM'
    },
    {'_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}

  ];

  app.get('/api/page/:pid/widget', findAllWidgetsForPage);
  app.get('/api/widget/:wgid', findWidgetById);
  app.post('/api/page/:pid/widget', createWidget);
  app.put('/api/page/:pid/widget/:wgid',updateWidget);
  app.delete('/api/page/:pid/widget/:wgid',deleteWidget);

  var WidgetModel = require('../model/widget/widget.model.server')

  function deleteWidget(reg, res){
    var wgid = reg.params['wgid'];
    WidgetModel.deleteWidget(wgid)
      .then(function(stats){
        res.json(stats);
      })
    // for (var i = 0; i < widgets.length; i++) {
    //   if (widgets[i]._id === wgid) {
    //     widgets.splice(i, 1);
    //     res.json(widgets);
    //     return;
    //   }
    // }
  }

  function updateWidget(reg, res) {
    var pid = reg.params['pid'];
    var wgid = reg.params['wgid']
    var newWidget = reg.body;
    WidgetModel.updateWidget(wgid, newWidget)
      .then(function(stats){
        res.json(stats);
      })
    // for (var i = 0; i < widgets.length; i++) {
    //   if (widgets[i]._id === wgid) {
    //     widgets[i] = newWidget;
    //     res.json(getWidgetById(wgid));
    //     return;
    //   }
    // }

  }
  function createWidget(reg, res){
    var pid = reg.params['pid'];
    var widget = reg.body;
    WidgetModel.createWidget(widget)
      .then(function(newWidget){
        res.json(newWidget);
      })
    // widget._id = (Math.floor(Math.random() * 999) + 100 ).toString();
    // widgets.push(widget);
    // var widgets0 = getWidgetById(widget._id);
    // res.json(widgets0);

  }


  function findWidgetById(reg,res){
    var wgid = reg.params['wgid'];
    // res.json(getWidgetById(wgid));
    WidgetModel.findWidgetById(wgid)
      .then(function(widget){
        res.json(widget);
      })

  }
  function getWidgetById(wgid) {
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === wgid) {
        return widgets[i];
      }
    }
  }

  function findAllWidgetsForPage(reg, res) {
    var pid = reg.params['pid'];
    WidgetModel.findAllWidgetsForPage(pid)
      .then(function (widgets) {
        res.json(widgets);
      })
    // res.json(getWidgetsForPageId(pid));
  }
  function getWidgetsForPageId(pid) {
    var WIDGETS = [];

    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pid) {
        WIDGETS.push(widgets[i]);
      }
    }
    return WIDGETS;
  }
}
