import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  `,
  // templateUrl: './app.component.html',//<app-customers></app-customers>
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
