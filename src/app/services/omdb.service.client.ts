import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export  class OmdbServiceClient {
  searchMovieByTitle(title: String) {
    const url = 'https://newsapi.org/v2/top-headlines?sources=' + title + '&apiKey=9a540554d49b44e3ad4458f8bae3e747';
    return this.http.get(url)
      .map((response: Response) => {
     return response.json();
    });
  }
  constructor (private http: Http) {}
}
