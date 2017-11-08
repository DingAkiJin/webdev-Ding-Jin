import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  userId: String;
  pId: String;
  websiteId: String;
  widgetId: String;
  widget: {};
  widgetType: String;
  name: String;
  rows: String;
  text: String;
  placeholder: String;
  widgets: {};
  formatted: Boolean;
  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) { }

  deleteWidget(pid: String, wgid: String) {
    this.widgetService.deleteWidget(pid, wgid)
      .subscribe(
        (widgets) => {
          this.widgets = widgets;
        });
  }
  updateWidget(text: String, rows: String, name: String, placeholder: String, formatted: Boolean) {
    // const newWidget = new Widget(this.widgetId, 'HEADING', this.pId , size , text, '', '');
    const newWidget = {
      _id: this.widgetId,
      widgetType:  'TEXT',
      pageId: this.pId,
      text: text,
      rows: rows,
      name: name,
      placeholder: placeholder,
      formatted: formatted
    }
    this.widgetService.updateWidget(this.pId, this.widgetId, newWidget)
      .subscribe((widget) => {
        this.widget = widget;
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any ) => {
          this.userId = params['uid'];
          this.pId = params['pid'];
          this.websiteId = params['wid'];
          this.widgetId = params['wgid'];
          this.widgetService.findWidgetById(this.widgetId)
            .subscribe((widget0) => {
              if (widget0) {
                this.widget = widget0;
                this.widgetType = widget0.widgetType;
                this.name = widget0.name;
                this.rows = widget0.rows;
                this.text = widget0.text;
                this.placeholder = widget0.placeholder;
                this.formatted = widget0.formatted;
              }
            });
        });
  }

}
