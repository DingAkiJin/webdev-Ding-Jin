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
  wId: String;
  description: String;
  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any ) => {
          this.pid = params['pid'];
          this.userId = params['uid'];
          this.wId = params['wid'];
        }
      );
    this.page = this.pageService.findPageById(this.pid);
    this.name = this.page.name;
    this.description = this.page.description;
  }

}
