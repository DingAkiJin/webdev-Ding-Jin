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
  userId: String;
  pId: String;
  websiteId: String;
  widgetId: String;
  widget: Widget;
  widgetImage: Widget;
  widgetYoutube: Widget;
  widgets: Widget[];
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

  }
  createWidget(widgetType: String) {
    const widget:  Widget = new Widget('', widgetType, this.pId, 0, '' , '' , '');
    this.widgetService.createWidget(this.pId , widget)
      .subscribe((widget0: Widget) => {
        if (widget0) {
          this.router.navigate(['/profile', this.userId , 'website', this.websiteId, 'page' , this.pId , 'widget', widget0._id]);
        }
      });

  }

}
