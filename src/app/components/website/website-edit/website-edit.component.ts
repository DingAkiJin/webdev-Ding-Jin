import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';

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
  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute) { }
  updateWebsits(websiteName: String, description: String) {
    const newWebsite = new Website(this.website._id, websiteName, this.website.developerId , description);
    this.websiteService.updateWebsite(this.uid, newWebsite)
      .subscribe((website) => {
        this.website = website;
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any ) => {
          this.wid = params['wid'];
          this.uid = params['uid'];
          this.websiteService
            .findWebsiteById(this.uid, this.wid).subscribe(
            (website) => {
              this.website = website;
            });
        });
  }

}
