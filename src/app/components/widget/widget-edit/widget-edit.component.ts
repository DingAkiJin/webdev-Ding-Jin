import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  id: String;
  name: String;
  constructor() { }

  ngOnInit() {
  }

}
