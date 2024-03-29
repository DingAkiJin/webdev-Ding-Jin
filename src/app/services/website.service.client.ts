import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Website} from '../models/website.model.client';
import {WEBSITES} from './website.mock.client';

// injecting service into module
@Injectable()

export class WebsiteService {
  websites: Website[] = WEBSITES;

  constructor(private http: Http) {
  }
  baseUrl = environment.baseUrl;

  api = {
    'createWebsite': this.createWebsite,
    'findWebsiteById': this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite,
    'findAllWebsites': this.findAllWebsites,
  };
  updateWebsite(uid, newWebsite) {
    const url = this.baseUrl + '/api/user/' + uid + '/website/' + newWebsite._id;
    return this.http.put(url, newWebsite)
      .map((res: Response) => {
      return res.json();
      });
  }

  findWebsitesByUser(uid: String) {
    const url = this.baseUrl + '/api/user/' + uid + '/website';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAllWebsites() {
    return this.http.get(this.baseUrl + '/api/website')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  createWebsite(uid: String, website) {
    const url = this.baseUrl + '/api/user/' + uid + '/website';
    return this.http.post(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsiteById(uid: String, websiteId: String) {
    const url = this.baseUrl + '/api/user/' + uid + '/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWebsite(websiteId: String, uid: String) {
    const url = this.baseUrl + '/api/user/' + uid + '/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });

  }



}
