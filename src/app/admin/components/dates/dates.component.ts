import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  template: `<h1>{{ date }}</h1>`,
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  date: string;

  constructor() { }

  ngOnInit() {

  }

}
