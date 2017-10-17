import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
   styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  @ViewChild('f') createWidgetForm: NgForm;
  userId: String;
  pId: String;
  websiteId: String;
  widgetId: String;
  widgetHeader: Widget;
  widgetImage: Widget;
  widgetYoutube: Widget;
  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pId = params['pid'];
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
    this.widgetHeader = this.widgetService.createWidgetHeader(this.pId);
    this.widgetImage = this.widgetService.createWidgetImage(this.pId);
    this.widgetYoutube = this.widgetService.createWidgetYoutube(this.pId);
  }
}
