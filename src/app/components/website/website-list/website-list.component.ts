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
  website: Website;

  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute) {
  }
  updateWebsits(websiteName: String) {
    const newWebsite = new Website(this.website._id, websiteName, this.website.developerId , '');
    this._websiteService.updateWebsite(this.uid, newWebsite)
      .subscribe((websites) => {
        this.websites = websites;
      });
  }

  selectWebsite(WebsiteId: String) {
    this._websiteService.findWebsiteById(this.uid, WebsiteId)
      .subscribe((website) => {
      this.website = website;
        this.websiteName = this.website.name;
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
