import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  @ViewChild('f') createPageForm: NgForm;
  name: String;
  title: String;
  userId: String;
  websiteId: String;

  constructor(private _pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
  }

  createNewPage() {
    this.name = this.createPageForm.value.name;
    this.title = this.createPageForm.value.title;
    const page: Page = this._pageService.createPage(this.name, this.title);
    if (page) {
      this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page']);
    }

  }
}
