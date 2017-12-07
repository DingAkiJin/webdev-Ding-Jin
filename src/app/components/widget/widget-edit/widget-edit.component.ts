import {Component,  OnInit} from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import { NgSwitch } from '@angular/common';
import {SharedService} from '../../../services/shared.service';


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
  widget = {widgetType: ''};
  user: {};
  constructor(private sharedService: SharedService,
    private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) { }
  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
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
        });
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe((widget0: Widget) => {
        this.widget.widgetType = widget0.widgetType.toString();
      });
  }

}
