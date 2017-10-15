import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {

  constructor() {
  }

  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }

  ]


  api = {
    'createPage': this.createPage,
    'findPageByWebsiteId': this.findPageByWebsiteId,
    'findPageById': this.findPageById,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage,
  };

  createPage(websiteId: String, page: any) {
    page.websiteId = websiteId;
    this.pages.push(page);
    return page;
  }
  findPageByWebsiteId(websiteId: String){
    for ( let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        return this.pages[x];
      }
    }
  }
  findPageById(pageId: String){
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        return this.pages[x];
      }
    }
  }


  updatePage(pageId: String, page: any) {
    const updateUser = this.pages.find(function (user) {
      return user._id === pageId
    });
    const index = this.pages.indexOf(updateUser);
    return this.pages[index] = page;
  }


  deletePage(pageId: String){
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        delete this.pages[x];
      }
    }
  }


}
