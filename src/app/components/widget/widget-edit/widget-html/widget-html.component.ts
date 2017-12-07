import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from "../../../../services/shared.service";

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  userId: String;
  pId: String;
  websiteId: String;
  widgetId: String;
  widget: {};
  widgetType: String;
  name: String;
  text: String;
  widgets: {};
  user: {};
  constructor(private sharedService: SharedService,
    private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) { }
  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }

  deleteWidget(pid: String, wgid: String) {
    this.widgetService.deleteWidget(pid, wgid)
      .subscribe(
        (widgets) => {
          this.widgets = widgets;
        });
  }
  updateWidget(name: String, text: String) {
    // const newWidget = new Widget(this.widgetId, 'HEADING', this.pId , size , text, '', '');
    const newWidget = {
      _id: this.widgetId,
      widgetType:  'HTML',
      pageId: this.pId,
      text: text,
      name: name,
    }
    this.widgetService.updateWidget(this.pId, this.widgetId, newWidget)
      .subscribe((widget) => {
        this.widget = widget;
      });
  }

  ngOnInit() {
    this.getUser();
    this.activatedRoute.params
      .subscribe(
        (params: any ) => {
          // this.userId = params['uid'];
          this.pId = params['pid'];
          this.websiteId = params['wid'];
          this.widgetId = params['wgid'];
          this.widgetService.findWidgetById(this.widgetId)
            .subscribe((widget0) => {
              if (widget0) {
                this.widget = widget0;
                this.widgetType = widget0.widgetType;
                this.name = widget0.name;
                this.text = widget0.text;
              }
            });
        });
  }

}
