import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';
import {SharedService} from "../../../services/shared.service";



@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  pId: String;
  wId: String;
  userId: String;
  widgets: [{}];
  user: {};
  baseUrl = environment.baseUrl;
  constructor(private sharedService: SharedService, private _widgetService: WidgetService, private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer) { }
  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }
  ngOnInit() {
    this.getUser();
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.wId = params['wid'];
          // this.userId = params['uid'];
          this.pId = params['pid'];
          this._widgetService
            .findAllWidgetsForPage(this.userId, this.wId, this.pId).subscribe(
            (widgets) => {
              this.widgets = widgets;
              console.log(this.widgets);
            });

        });

    // this.widgets = this._widgetService.findWidgetByPageId(this.pId);
  }
  reorderWidgets(indexes) {
    // call widget service function to update widget as per index
    this._widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pId)
      .subscribe(
        (data) => console.log(data)
      );
  }

}
