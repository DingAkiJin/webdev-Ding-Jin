import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from "../../../../services/shared.service";


@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  userId: String;
  pId: String;
  websiteId: String;
  widgetId: String;
  widget: Widget;
  widgetType: String;
  width: String;
  url: String;
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
  updateWidget(text: String, url: String, width: String) {
    // const newWidget = new Widget(this.widgetId, 'YOUTUBE', this.pId , 0 , '', this.width, this.url);
    const newWidget = {
      _id: this.widgetId,
      widgetType: 'YOUTUBE',
      pageId: this.pId,
      size: 0,
      text: text,
      width: width,
      url : url
    }
    this.widgetService.updateWidget(this.pId, this.widgetId, newWidget)
      .subscribe((widget) => {
        this.widget = widget;
      });
  }
  deleteWidget(pid: String, wgid: String) {
    this.widgetService.deleteWidget(pid, wgid)
      .subscribe(
        (widgets) => {
          this.widgets = widgets;
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
                this.width = widget0.width;
                this.url = widget0.url;
                this.text = widget0.text;
              }
            });
        });

  }

}
