import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  pId: String;
  wId: String;
  userId: String;
  widgets: Widget[];
  constructor(private _widgetService: WidgetService, private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.wId = params['wid'];
          this.userId = params['uid'];
          this.pId = params['pid'];

        }
      );

    this.widgets = this._widgetService.findWidgetByPageId(this.pId);
  }

}
