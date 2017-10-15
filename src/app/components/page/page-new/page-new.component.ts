import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  wId: String;
  userId: String;
  pages: Page[];

  constructor(private _pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {this.activatedRoute.params
    .subscribe(
      (params: any) => {
        this.wId = params['wid'];
        this.userId = params['uid'];

      }
    );

    this.pages = this._pageService.findPageByWebsiteId(this.wId);
  }
}