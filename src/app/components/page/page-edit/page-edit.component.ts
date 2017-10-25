import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

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
  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute) { }

  deletePage(wid: String, pid: String) {
    this.pageService.deletePage(wid, pid)
      .subscribe(
        (pages) => {
          this.pages = pages;
        });
  }

  updatePages(name: String, title: String) {
    const newPage = new Page(this.pid, name, this.page.websiteId , title);
    this.pageService.updatePage(this.wid, this.pid, newPage)
      .subscribe((page) => {
        this.page = page;
      });
  }
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any ) => {
          this.pid = params['pid'];
          this.userId = params['uid'];
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
