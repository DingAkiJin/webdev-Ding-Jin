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
  id: String;
  page: Page;
  name: String;
  websiteId: String;
  description: String;
  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any ) => {
          this.id = params['pid'];
        }
      );
    this.page = this.pageService.findPageById(this.id);
    this.name = this.page.name;
    this.websiteId = this.page.websiteId;
    this.description = this.page.description;
  }

}
