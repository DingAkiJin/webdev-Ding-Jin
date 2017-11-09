import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable() // needed as we're injecting Http service into this service
export class FlickrService {

  key = 'b380c08a1cafdd396ca2db76d233f026';
  secret = 'cc3d245bb4eec4fb';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&format=json&api_key=API_KEY&text=TEXT';

  constructor(private _http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }
}
