import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

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
  user: {};
  constructor(private router: Router, private sharedService: SharedService, private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }
  getUser() {
    this.user = this.sharedService.user;
    this.uid = this.user['_id'];
  }
  ngOnInit() {
    this.getUser();
   // this.activatedRoute.params.subscribe(
      // (params) => {
        // this.uid = params['uid'];
        this._websiteService
          .findWebsitesByUser(this.uid).subscribe(
          (websites) => {
            this.websites = websites;
          });
     // };
  }

  createWebsite(websitename, description) {
    // const website: Website = new Website('', websitename , '' , description);
    const newWebsite = {
      name: websitename ,
      description: description
    }
    this._websiteService.createWebsite(this.uid, newWebsite)
      .subscribe(
        (data: any) => this.router.navigate(['profile/', 'website']),
        // this.websites = websites;
      );
  }
  }




