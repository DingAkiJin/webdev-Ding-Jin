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


  api = {
    'createWebsite': this.createWebsite,
    'findWebsiteById': this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite,
  };

  /*createWebsite(name: String, description: String) {
    const _id = (Math.floor( Math.random() * 999 ) + 100 ).toString();
    const website = {_id: _id, name: name.toString(), developerId: 'null', description: description.toString()};
    this.websites.push(website);
    return website;
  }*/
  findWebsitesByUser(uid: String) {
    const url = 'http://localhost:3100/api/user/' + uid + '/website';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAllWebsites() {
    return this.http.get('http://localhost:3100/api/website')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  createWebsite(uid: String, website: Website) {
    const url = 'http://localhost:3100/api/user/' + uid + '/website';
    return this.http.post(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsiteById(uid: String, websiteId: String) {
    const url = 'http://localhost:3100/api/user/' + uid + '/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWebsite(websiteId: String, uid: String) {
    const url = 'http://localhost:3100/api/user/' + uid + '/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });

  }


  updateWebsite(websiteId: String, website: any) {
    const updateUser = this.websites.find(function (user) {
      return user._id === websiteId;
    });
    const index = this.websites.indexOf(updateUser);
    return this.websites[index] = website;
  }
}
