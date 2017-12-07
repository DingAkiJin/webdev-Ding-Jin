import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  userId: String;
  pid: String;
  page: Page;
  name: String;
  wid: String;
  description: String;
  title: String;
  pages: Page[];
  user: {};
  constructor(private sharedService: SharedService,
              private pageService: PageService,
              private activatedRoute: ActivatedRoute) { }

  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }
  deletePage(wid: String, pid: String) {
    this.pageService.deletePage(wid, pid)
      .subscribe(
        (pages) => {
          this.pages = pages;
        });
  }

  updatePages(name: String, title: String) {
    // const newPage = new Page(this.pid, name, this.page.websiteId , title);
    const newPage = {
      _id: this.page._id,
      name: name,
      websiteId: this.page.websiteId,
      description: title
    }
    this.pageService.updatePage(this.wid, newPage)
      .subscribe((page) => {
        this.page = page;
      });
  }
  ngOnInit() {
    this.getUser();
    this.activatedRoute.params
      .subscribe(
        (params: any ) => {
          this.pid = params['pid'];
         //  this.userId = params['uid'];
          this.wid = params['wid'];
          this.pageService
           .findPageById(this.wid, this.pid).subscribe(
             (page) => {
             this.page = page;
             this.name = this.page.name;
             this.title = this.page.description;
      });
  });
  }

}
