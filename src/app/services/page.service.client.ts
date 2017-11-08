import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Page} from '../models/page.model.client';

// injecting service into module
@Injectable()

export class PageService {

  constructor(private http: Http) {
  }
  baseUrl = environment.baseUrl;
  findAllPagesForWebsite(uid: String, wid: String) {
    const url = this.baseUrl + '/api/website/' + wid + '/page';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findPageById(wid: String, pid: String) {
    const url = this.baseUrl + '/api/website/' + wid + '/page/' + pid;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  createPage(wid, page) {
    const url = this.baseUrl + '/api/website/' + wid + '/page';
    return this.http.post(url, page)
      .map((response: Response) => {
        return response.json();
      });
  }
  findPageByWebsiteId(websiteId: String) {
  }



  updatePage(wid,  newPage) {
    const url = this.baseUrl + '/api/website/' + wid + '/page/' + newPage._id ;
    return this.http.put(url, newPage)
      .map((res: Response) => {
        return res.json();
      });
  }


  deletePage(wid: String, pid: String) {
    const url = this.baseUrl + '/api/website/' + wid + '/page/' + pid ;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }





}
