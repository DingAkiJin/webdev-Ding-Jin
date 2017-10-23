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
  id: String;
  website: Website;
  name: String;
  developerId: String;
  description: String;
  websites: Website[];
  userId: String;
  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any ) => {
          this.id = params['wid'];
        }
      );
    this.website = this.websiteService.findWebsiteById(this.id);
    this.name = this.website.name;
    this.developerId = this.website.developerId;
    this.description = this.website.description;
    // this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

}
