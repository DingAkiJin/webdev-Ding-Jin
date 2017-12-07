import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from "../../../../services/shared.service";

@Component({
  selector: 'app-widget-heading',
  templateUrl: './widget-heading.component.html',
  styleUrls: ['./widget-heading.component.css']
})
export class WidgetHeadingComponent implements OnInit {

  userId: String;
  pId: String;
  websiteId: String;
  widgetId: String;
  widget: Widget;
  widgetType: String;
  size: Number;
  text: String;
  widgets: Widget[];
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
  updateWidget(text: String, size: Number) {
    // const newWidget = new Widget(this.widgetId, 'HEADING', this.pId , size , text, '', '');
    const newWidget = {
      _id: this.widgetId,
      widgetType:  'HEADING',
      pageId: this.pId,
      size: size,
      text: text,
      width: '',
      url : '',
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
            .subscribe((widget0: Widget) => {
            if (widget0) {
              this.widget = widget0;
              this.widgetType = widget0.widgetType;
              this.size = widget0.size;
              this.text = widget0.text;
            }
            });
        });
  }

}
