import { Component, OnInit } from '@angular/core';
import {OmdbServiceClient} from "../../services/omdb.service.client";

@Component({
  selector: 'app-omdbtest',
  templateUrl: './omdbtest.component.html',
  styleUrls: ['./omdbtest.component.css']
})
export class OmdbtestComponent implements OnInit {
 title: String;
 result: Object;
 searchMovie(title: String) {
  this.omdbService.searchMovieByTitle(title)
    .subscribe((result) => {
    this.result = result;
    console.log(result);
    });
 }
  constructor(private omdbService: OmdbServiceClient) { }

  ngOnInit() {
  }

}
