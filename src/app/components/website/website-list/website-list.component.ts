import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  websites: {};
  websiteName: String;
  uid: String;
  website: Website;
  user: {};

  constructor(private sharedService: SharedService, private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute) {
  }

  getUser() {
    this.user = this.sharedService.user;
    this.uid = this.user['_id'];
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
     this.getUser();
    this._websiteService.findWebsitesByUser(this.uid)
      .subscribe(
        (data) => {
          console.log(data);
          this.websites = data; },
        (error) => console.log(error)
      ); }

}
