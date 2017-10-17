import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';


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
  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any ) => {
          this.userId = params['uid'];
          this.pId = params['pid'];
          this.websiteId = params['wid'];
          this.widgetId = params['wgid'];
        }
      );
    this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.widgetType = this.widget.widgetType;
    this.width = this.widget.width;
    this.url = this.widget.url;

  }

}
