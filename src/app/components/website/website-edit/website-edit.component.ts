import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  wid: String;
  website: Website;
  name: String;
  developerId: String;
  description: String;
  websites: Website[];
  uid: String;
  user: {};
  constructor(private sharedService: SharedService,
              private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute) { }

  getUser() {
    this.user = this.sharedService.user;
    this.uid = this.user['_id'];
  }
  updateWebsits(websiteName: String, description: String) {
    const newWebsite = {
      _id: this.website._id,
      name: websiteName,
      developerId: this.website.developerId,
      description: description
    }
    this.websiteService.updateWebsite(this.uid, newWebsite)
      .subscribe((website) => {
        this.website = website;
      });
  }

  ngOnInit() {
    this.getUser();
    this.activatedRoute.params
      .subscribe(
        (params: any ) => {
          this.wid = params['wid'];
          // this.uid = params['uid'];
          this.websiteService
            .findWebsiteById(this.uid, this.wid).subscribe(
            (website) => {
              this.website = website;
            });
        });
  }

}
