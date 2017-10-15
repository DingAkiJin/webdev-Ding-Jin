import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor() {
  }

  widgets = [
    { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'},
    { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://youtu.be/AM2Ivdi9c4E' },
    { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}

  ]


  api = {
    'createWidget': this.createWidget,
    'findWidgetByPageId': this.findWidgetByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget,
  };

  createWidget(pageId: String, widget: any) {
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }
  findWidgetByPageId(pageId: string){
    for ( let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === pageId) {
        return this.widgets[x];
      }
    }
  }
  findWidgetById(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if ( this.widgets[x]._id === widgetId){
        return this.widgets[x];
      }
    }
  }


  updateWidget(widgetId: string, widget: any) {
    const updateUser = this.widgets.find(function (user) {
      return user._id === widgetId
    });
    const index = this.widgets.indexOf(updateUser);
    return this.widgets[index] = widget;
  }


  deleteWidget(widgetId: string){
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        delete this.widgets[x];
      }
    }
  }


}
