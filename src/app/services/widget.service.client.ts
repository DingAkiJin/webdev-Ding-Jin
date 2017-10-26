import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Widget} from '../models/widget.model.client';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private http: Http) {
  }
  findAllWidgetsForPage(uid: String, wid: String, pid: String) {
    const url = 'http://localhost:3100/api/page/' + pid + '/widget';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }
  createWidget(pid: String, widget: Widget) {
     const url = 'http://localhost:3100/api/page/' + pid + '/widget';
     return this.http.post(url, widget)
       .map((response: Response) => {
         return response.json();
       });
  }
  createWidgetHeader(pageId: String) {

  }
  createWidgetImage(pageId: String) {

  }
  createWidgetYoutube(pageId: String) {

  }
  findWidgetById(wgid: String) {
    const url = 'http://localhost:3100/api/widget/' + wgid ;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  updateWidget(pid: String, wgid: String, newWidget: Widget) {
    const url = 'http://localhost:3100/api/page/' + pid + '/widget/' + wgid  ;
    return this.http.put(url, newWidget)
      .map((res: Response) => {
        return res.json();
      });
}


  deleteWidget(pid: String, wgid: String) {
    const url = 'http://localhost:3100/api/page/' + pid + '/widget/' + wgid  ;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }


}
