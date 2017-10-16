import {Component,  OnInit} from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import { NgSwitch } from '@angular/common';


@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  userId: String;
  pId: String;
  websiteId: String;
  widgetId: String;
  widget: Widget;
  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any ) => {
          this.userId = params['uid'];
          this.pId = params['pid'];
          this.websiteId = params['wid'];
          this.websiteId = params['wgid'];
        }
      );
    this.widget = this.widgetService.findWidgetById(this.widgetId);
  }

}
