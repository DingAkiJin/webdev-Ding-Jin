import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  wId: String;
  userId: String;
  pages: Page[];
  user: {};
  constructor(private sharedService: SharedService, private _pageService: PageService, private activatedRoute: ActivatedRoute) { }
  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }
  ngOnInit() {
    this.getUser();
    this.activatedRoute.params
      .subscribe(
        (params) => {
          // this.userId = params['uid'];
          this.wId = params['wid'];
          this._pageService
            .findAllPagesForWebsite(this.userId, this.wId).subscribe(
            (pages) => {
              this.pages = pages;
            });
        });
  }

}
