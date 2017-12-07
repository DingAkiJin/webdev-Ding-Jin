import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  name: String;
  title: String;
  userId: String;
  websiteId: String;
  pages: Page[];
  user: {};

  constructor(private sharedService: SharedService,
    private _pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }
  ngOnInit() {
    this.getUser();
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          // this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
  }
  createPage(name: String, title: String) {
    // const page0: Page = new Page('', name , this.websiteId , title);
    const newPage = {
      name: name ,
      websiteId: this.websiteId,
      description: title
    }
    this._pageService.createPage(this.websiteId, newPage)
      .subscribe((pages) => {
        this.pages = pages;
      });

  }
}
