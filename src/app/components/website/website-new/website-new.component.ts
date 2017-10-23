import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  websites: Website[];
  websitename: String;
  description: String;
  uid: String;
  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }
  createWebsite(name, description) {
    const website: Website = new Website('', name , '' , description);
    this._websiteService.createWebsite(this.uid, website)
      .subscribe((websites) => {
        this.websites = websites;
      });
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.uid = params['uid'];
        this._websiteService
          .findWebsitesByUser(this.uid).subscribe(
          (websites) => {
            this.websites = websites;
          });
      });
}
}
