import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../../services/shared.service';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  websiteId: string;
  pageId: string;
  userId: string;
  widgetId: string;
  photos: [any];
  error: string;
  searchText: string;
  user: {};

  constructor(private flickrService: FlickrService, private widgetService: WidgetService, private router: Router,
              private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }
  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }
  ngOnInit() {
    this.getUser();

    // fetch userId, pageId and websiteId from url
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
        }
      );
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          this.photos = val.photos['photo'];
        }
      );


    // .then(function (response) {
    //   let dat = response.data.replace('jsonFlickrApi(', '');
    //   dat = dat.substring(0, dat.length - 1);
    //   dat = JSON.parse(dat);
    //   this.photos = dat.photos;
    // });
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';

    const widget = {
      pageId : this.pageId,
      url: url
    };

    this.widgetService
      .updateWidget(this.pageId, this.widgetId, widget)
      .subscribe(
        (data: any) => {
          const result = data;
          if (result) { this.router.navigate(
            ['/profile/' + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId] );
          } else {
            this.error = 'failed!';
          }
        }
      );



  }

}
