import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  websites: Website[];
  websiteName: String;
  uid: String;


  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute) {
  }

  selectWebsite(WebsiteId: String) {
    this._websiteService.findWebsiteById(this.uid, WebsiteId)
      .subscribe((website) => {
        this.websiteName = website.name;
      });
  }
  deleteWebsite(websiteId: String) {
    this._websiteService.deleteWebsite( websiteId, this.uid)
      .subscribe(
        (websites) => {
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
