import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

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
  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) { }

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
    this.size = this.widget.size;
    this.text = this.widget.text;
  }

}
